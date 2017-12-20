# Build a conversational Chatbot

During this task you will connect your chatbot to Dialogflow. Dialogflow enables human-like conversations and identifying a user's intent. During this task we will build a [a linear dialog](https://dialogflow.com/docs/dialogs).

Hint: If you have troubles you can use our target solution, find `dialogflow.zip` and import it to Dialogflow.

1. Create a new agent at [Dialogflow](https://console.dialogflow.com)

2. To extract information out of user inputs, create the entity you want to extract: `parcel_id`. Disable "Define synonyms" and enable "Allow automated expansion". Enter "@sys.number:parcel_id" as value, to extract numbers.

3. Create the intent you want to handle: `Parcel Status Request`. Train Dialogflow to recognize this intent with a couple of sentences. Add the entity you just created as required parameter and define some prompts for it. Add a response, similar to `The parcel with the id $parcel_id will arrive tomorrow!`.

4. You can test your solution via the "Try it now" text input field in the top right corner.