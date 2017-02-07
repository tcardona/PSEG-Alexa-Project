#### Alexa Cookbook
## Hello World <a id="title"></a>
<hr />

### Intro <a id="intro"></a>


### This is a simple tutorial to introduce a simple Alexa skill and code.
#### Pre-requisites:
 * Accounts on [AWS.Amazon.com](https://aws.amazon.com/) and [Developer.Amazon.com](https://developer.amazon.com/)

### Tutorial Steps
#### Code
1. Login to AWS and verify the region at the top right is set to the **N. Virginia** Region (not Oregon)
1. Click [Lambda](https://console.aws.amazon.com/lambda/home?region=us-east-1#/) and then **Create a Lambda function**
1. Choose the ```alexa-skill-kit-sdk-factskill``` skill template (hint: search for **fact** )
1. Click in the empty square and choose the trigger *Alexa Skills Kit* and click Next.
1. Give your function the name *HelloWorld*
1. Paste in the source code from [src/index.js](./src/index.js) :
    ```
        var Alexa = require('alexa-sdk');

        exports.handler = function(event, context, callback) {
            var alexa = Alexa.handler(event, context);
            alexa.registerHandlers(handlers);
            alexa.execute();
        };

        var handlers = {
            'LaunchRequest': function () {
                this.emit('MyIntent');
            },

            'MyIntent': function () {
                this.emit(':tell', 'Hello World from Alexa!');
            }
        };
    ```
1. Just below the code editor, create or re-use an execution role, such as ```lambda_basic_execution```
1. Click Next and create the function.
1. Make note of the Lambda ARN, shown near the top right, such as
 *  ``` arn:aws:lambda:us-east-1:333304287777:function:HelloWorld ```


#### Skill
1. Login to [developer.amazon.com] and click Alexa, then Alexa Skills Kit
1. Create a new Skill called HelloWorld with invocation name ```hello world```.
1. Paste in the [IntentSchema.json](./speechAssets/IntentSchema.json) :
    ```
    {
      "intents": [
        { "intent": "MyIntent" ,  "slots":[] }
      ]
    }
    ```
1. Paste in the [SampleUtterances.txt](speechAssets/SampleUtterances.txt) :
    ```
    MyIntent hello
    ```
1. Configure the skill endpoint with the AWS Lambda ARN previously created.

#### Test
* Type or say "open hello world" and Alexa should reply with "hello world from Alexa"
* Modify code within the Lambda function editor to have Alexa say something besides Hello World.
* Test and hear Alexa say the new response.


## Lab 1
This lab will have you extend your skill by adding new Intents.  First we will add the intent to the skill definition.

1. Within the [Dev Portal](https://developer.amazon.com/edw/home.html#/skills/list) skill definition, click on the Interaction Model page.
1. Review the Intent Schema panel, notice the three lines that define the MyIntent schema.
1. Create a new intent definition, similar to MyIntent called WhatsUpIntent
1. Within the Sample Utterances box, add a sample for the new intent, such as ```WhatsUpIntent what is up```

Next, we will add a handler to the AWS Lambda function

1. Within the [AWS Lambda Console](https://console.aws.amazon.com/lambda/home) console, review your function code
1. Within the handlers section, notice the three lines of code that handle the MyIntent event.
1. Create a new handler for the WhatsUpIntent (hint: copy & paste the MyIntent block and change MyIntent to WhatsUpIntent)
1. Customize the message Alexa will say
1. Change the emit from a ```:tell``` to an ```:ask```.  This :ask will keep the session open.
1. Test your new skill by opening the skill and saying "what is up"

Finally, we will add handlers for default requests such as Help, Stop, and Cancel

1. Within the Lambda code, add handlers for the remaining events listed in your Intent Schema
1. Customize the message in each handler
1. Ensure the Help handler action is ```:ask```, while the Cancel and Stop handlers are ```:tell```.

Feel free to add additional intents and handlers to make your skill unique.

## Lab 2

This lab will have you add Intents with Slots.

 * Add a new Intent such as MyNameIsIntent.  Define a slot with the intent.
Your Intent should look like this:
```
{
      "intent": "MyNameIsIntent",
      "slots":[
        {
          "name":"firstname",
          "type":"AMAZON.US_FIRST_NAME"
        }
      ]
    }
```

 * Create a handler within your AWS Lambda function that stores the firstname slot value in a local variable:

```var myName = this.event.request.intent.slots.firstname.value;```

 * Repeat the name back to the user as part of the Stop Intent message.


## Lab 3

Add short MP3 audio clips to your output via SSML.
Read the [documentation page](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/speech-synthesis-markup-language-ssml-reference#audio) on how to prepare and host MP3 audio clips in the required format.

Examples:
```
There is a three second pause here <break time="3s"/>  then the speech continues.

<audio src='https://s3.amazonaws.com/my-ssml-samples/Flourish.mp3' />
<audio src='https://s3.amazonaws.com/my-ssml-samples/cheap_thrills.mp3' />
<audio src='https://s3.amazonaws.com/my-ssml-samples/this_is_what_you_came_for.mp3' />
```

## Lab 4

Using the **alexa-sdk**
1. Search the internet for ```npm alexa-sdk```
1. Read the documentation and try out the code snippets in your skill.



Back to the [Workshop Folder](../README.md#title) - [Cookbook Home Page](../../README.md#title)
