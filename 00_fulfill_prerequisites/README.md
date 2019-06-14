# Fulfill Prerequisites

## AWS account

When taking part at this code camp, you should have gotten an E-Mail with your AWS credentials and you should have been added to this InnoLab IAM permission group. If this did not happen, contact us.
[Create a new access key](http://docs.aws.amazon.com/general/latest/gr/managing-aws-access-keys.html) and place a file with the following minimal configuration at `~/.aws/credentials`

Driekt Link to AWS IAM:
https://console.aws.amazon.com/iam/home?region=eu-central-1#/users/<EMAIL>?section=security_credentials

```
[default]
aws_access_key_id = <aws_access_key_id>
aws_secret_access_key = <aws_secret_access_key>
```

Also place this config file at `~/.aws/config`

```
[default]
output = json
region = eu-central-1
```

## Docker

We prepared a Docker container, containing the AWS CLI, Node.js and NPM for you. After you [installed Docker](https://docs.docker.com/engine/installation/), run:

```
docker run -it -v ~/.aws:/root/.aws -v /path/to/this/repo/root:/root/tasks kochp/chatbot-cli:v1 bash
```

Run the following tasks from "inside" your docker container.

## Accounts

Verify you have a valid Google and Facebook account. Activate [Dialogflow](https://dialogflow.com/) for your Google account and become a [Facebook Developer](https://developers.facebook.com/).

## Editor

We recommend [VS Code](https://code.visualstudio.com/), but you can use Sublime, IntelliJ, Atom or what ever you like.
