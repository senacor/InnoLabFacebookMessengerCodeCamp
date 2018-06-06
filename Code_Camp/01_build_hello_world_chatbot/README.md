# Build a Hello World Chatbot

In this task you will create a Facebook Page, a Facebook App and a simple AWS lambda with Claudia.js, which will answer the messages sent to your Facebook Page.

1. To setup Facebook follow [our documentation](https://github.com/senacor/InnoLabFacebookMessenger/tree/master/docs/setup_facebook)!

2. Replace `<your_prefix>` in `package.json.template` with a unique prefix, otherwise you will get name collisions with other code camp participants. Rename `package.json.template` to `package.json`.

3. Run `npm run create` to create your lambda. Then type `npm run configure` and follow [our documentation](https://github.com/senacor/InnoLabFacebookMessenger/tree/master/docs/facebook_chatbot_with_claudia_js_in_five_minutes#create-a-webhook) to connect the lambda to your Facebook App.

4. Write to your bot, wait for the response.

5. Go to [AWS CloudWatch](https://eu-central-1.console.aws.amazon.com/cloudwatch/home?region=eu-central-1#) and inspect your lambda's log files.