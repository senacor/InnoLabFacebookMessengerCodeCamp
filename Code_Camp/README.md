# InnoLab Facebook Messenger Code Camp

This repository contains a list of the prerequisite, which are needed to participate at the "Facebook Messenger Chatbot" InnoLab, as well as several task descriptions.

## Prerequisite

- Senacor TecCo AWS account
- [Docker installed](https://docs.docker.com/engine/installation/)
- Verified and working [Facebook](https://facebook.com) account
- Verified and working [Google](https://google.com) account
- Any editor to write Javascript, we recommend [VS Code](https://code.visualstudio.com/)

## Tasks

0. [Fulfill prerequisites](./00_fulfill_prerequisites)
1. [Build Hello World chatbot](./01_build_hello_world_chatbot)
1. [Parse input, read from DB and use Facebook templates](./02_parse_input_db_facebook_templates)
1. [Conversations in Dialogflow (linear dialog)](./03_linear_dialogflow_dialogs)
1. [Build context in Dialogflow (non-linear dialog)](./04_non-linear_dialogflow_dialogs)
1. [Call business logic from Dialogflow (fulfillments)](./05_dialogflow_fullfilments)
1. [Link user's Facebook account](./06_link_users_facebook_account)

## Notes

You can omit using Docker for running the commands described in the tasks, if you have the AWS CLI and Node.js installed locally. If not, follow the instructions at [fulfill prerequisites](../00_fulfill_prerequisites) regarding Docker and run all commands from inside your Docker.

## Topics

The following lists is an overview of topics we are going to talk about. There is no need to read through this, as we will guide you the following two days.

### Day 1

- Overview and motivation
- How do FB bots work
- FaaS infrastructure
  - Lambda
  - API Gateway
- Claudia.js
- Task 0: Fulfill prerequisites
- Task 1: Hello World chatbot
- Facebook Dialog Elements
- DynamoDB
- Task 2: Parse input, read from DB and use Facebook templates
- Conversational chatbots
  - Compare Wit.ai, Lex and Dialogflow
- Deep dive Dialogflow
  - Entities
  - Intents
  - ...
- Task 3: Conversations in Dialogflow (linear dialog)

### Day 2

- Recap
- Task 4: Build context in Dialogflow (non-linear dialog)
- Lambda webhooks for Dialogflow
- Task 5: Call business logic from Dialogflow (fulfillments)
- Account linking: Secure user identification
- Task 6: lLink user's Facebook account
