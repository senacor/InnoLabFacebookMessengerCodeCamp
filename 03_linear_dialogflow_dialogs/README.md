# Build a conversational Chatbot

During this task you will connect your chatbot to Dialogflow. Dialogflow enables human-like conversations and identifying a user's intent. First build [a linear dialog](https://dialogflow.com/docs/dialogs).

1. Create a new agent at [Dialogflow](https://console.dialogflow.com)

2. Create the entity you want to extract: `parcel_id`. Disable "Define synonyms" and enable "Allow automated expansion". Enter "@sys.number:parcel_id" as value, to extract numbers.

3. Create the intent you want to handle: `Parcel Status Request`. Train Dialogflow to recognize this intent with a couple of sentences. Add the entity you just created as required parameter and define some prompts for it. Add a response, similar to `The parcel with the id $parcel_id will arrive tomorrow!`. You can test your solution via the "Try it now" text input field in the top right corner.

Hint: If you have troubles you can use our target solution, find `Testagent.zip` and import it to Dialogflow.