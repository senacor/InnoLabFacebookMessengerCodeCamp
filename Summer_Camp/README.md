# InnoLab Facebook Messenger Summer Camp

This repository contains a list of the prerequisite, which are needed to participate at the "Facebook Messenger Chatbot" InnoLab, as well as several task descriptions.

## Prerequisite

- Senacor TecCo AWS account
- [Docker installed](https://docs.docker.com/engine/installation/)
- Verified and working [Facebook](https://facebook.com) account
- Verified and working [Google](https://google.com) account
- Any editor to write Javascript, we recommend [VS Code](https://code.visualstudio.com/)

[Fulfill prerequisites](./00_fulfill_prerequisites)

## Tasks

0. 
3. 
4. [Build context in Dialogflow (non-linear dialog)](05_non-linear_dialogflow_dialogs)
5. [Call business logic from Dialogflow (fulfillments)](04_dialogflow_fullfilments)

## Notes

You can omit using Docker for running the commands described in the tasks, if you have the AWS CLI and Node.js installed locally. If not, follow the instructions at [fulfill prerequisites](./00_fulfill_prerequisites) regarding Docker and run all commands from inside your Docker.

## Topics

The following lists is an overview of topics we are going to talk about.
There is no need to read through this, as we will guide you the
following two days.

As it is the summer camp will try to get a direct connection to the
grund and start

- Welcome and gather expectations
- How do FB bots work
    - Page
    - App
- Dialogflow
    - Console
    - Integrations
- [Task 1](01_create_empty_chatbot_in_facebook): Create you own greeting
  facebook chatbot.
- Dialogflow
    - Entities
    - Intents
    - Promps
    - Linear Dialogs
- [Task 2](03_linear_dialogflow_dialogs): Conversations in Dialogflow
  (linear dialog)
- Dialogflow
    - Events
    - Fulfillment
    - Actions
- Lambda webhooks for Dialogflow
- [Task 3](04_dialogflow_fullfilments): Call business logic from Dialogflow (fulfillments)
- Dialogflow
    - Events
- [Task 3](05_non-linear_dialogflow_dialogs): Build context in Dialogflow
  (non-linear dialog)

