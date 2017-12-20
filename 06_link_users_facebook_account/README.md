# Link user's Facebook account

Since you don't want to allow everybody to reroute every parcel, but only authorized users, you need to verify their identity. You can do this by using Facebook's account linking process.

## Handle Digital Logistics login

See `./login_handler` for code.

Before you can link the Digital Logistic account with the Facebook account, the user has to login to the Digital Logistics account itself. We need a service to handle this logins.

1. Replace `<your_prefix>` at `login_handler/package.json.template` and move it to `login_handler/package.json` to start.

2. Implement `login_handler/index.js`, see TODOs

3. Deploy handler
```
cd login_handler
npm run create
```

## Provide login dialog

The user needs a GUI to login to the Digital Logistic account, Facebook will serve this GUI.

See `./login_dialog` for code.

1. Replace `<login_handler_url>` with the URL of the lambda you just deployed and rename the file from `<your_prefix>-login.html.template` to `<your_prefix>-login.html`, while replacing `<your_prefix>`.

2. Replace `<your_prefix>-login.html` at `deploy.sh` and type:
```
cd /path/to/login_dialog
./deploy.sh
```

## Handle Facebook's (un-)linking events

// TODO: Make templates

See `./fb_webhook` for code.

1. Since all Facebook requests resolve to a single webhook, but you cannot handle login requests in Dialogflow, you need to filter those requests and only redirect all non-linking requests to Dialogflow. Replace `<your_prefix>` at `fb_webhook/package.json.template` and move it to `fb_webhook/package.json` to start.

2. Deploy your lambda by typing `npm run create`.

3. Since we cannot use the Claudia.js bot builder for this task, we need to configure our Facebook/lambda setup manually. At the AWS web console got to the AWS lambda you just deployed and find the section "Environment variables". Create two variables:
```
dialogflow_webhook: https://bots.dialogflow.com/facebook/<dialogflow_agent_id>/webhook
facebook_verify_token: <a-random-string>
```

4. Now go to your Facebook app page -> Webhooks and remove the current webhook by clicking on `Edit subscription`. Now add a new webhook by clicking on the menu "Messenger", right above "Webhooks" and follow the instructions at the section "Webhooks". Find the lambda's link at the CLI output of the `npm run create` command and make sure to tick `messages` and `messaging_account_linking`. Go to AWS CloudWatch and verify your lambda got called by inspecting the log output.

5. At the Webhooks sections, subscribe to your Facebook page.

6. Now deploying and configuring is done, implement the `linkAccount` and `unlinkAccount` methods at `index.js` and update the lambda by typing `npm run update`.

## Provide user Login and Logout button

Build an Dialogflow intent, which returns the user a login or logout button. You can make this very advanced, however we are going to describe the most simple setup.

1. Create a Login intent. Train it with some login statements.

2. Add a custom payload response, make sure to replace `<your_prefix>`.
```
{
  "facebook": {
    "attachment": {
      "type": "template",
      "payload": {
        "template_type": "button",
        "text": "Verknüpfe deinen Digital Logistics Account",
        "buttons": [{
          "type": "account_link",
          "url": "https://s3.eu-central-1.amazonaws.com/digital-logistic-web/<your_prefix>-login.html"
        }]
      }
    }
  }
}
```

3. Create a logout intent with a custom payload response.
```
{
  "facebook": {
    "attachment": {
      "type": "template",
      "payload": {
        "template_type": "button",
        "text": "Entknüpfe deinen Digital Logistics Account",
        "buttons": [{
          "type": "account_unlink"
        }]
      }
    }
  }
}
```