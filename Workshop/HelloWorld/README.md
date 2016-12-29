#### Alexa Cookbook
## Hello World <a id="title"></a>
<hr />

### Intro <a id="intro"></a>


### This is a simple tutorial to introduce the simplest possible Alexa skill and code.
#### Pre-requisites:
 * Accounts on [AWS.Amazon.com](https://aws.amazon.com/) and [Developer.Amazon.com](https://developer.amazon.com/)

### Tutorial Steps
#### Code
1. Login to AWS and verify the region at the top right is set to the **N. Virginia** Region (not Oregon)
1. Click [Lambda](https://console.aws.amazon.com/lambda/home?region=us-east-1#/) and then **Create a Lambda function**
1. Choose the Blank Function blueprint
1. Click in the empty square and choose the trigger *Alexa Skills Kit* and click Next.
1. Give your function the name *HelloWorld*
1. Paste in the source code from [src/index.js](./src/index.js) :
    ```
    exports.handler = function( event, context, callback ) {

        var say = "Hello World";

        var response = {
            outputSpeech: {
                type: "SSML",
                ssml: "<speak>" + say + "</speak>"
            },
            shouldEndSession: true
        };

        callback(null, { response: response });

    };
    ```
1. Just below the code editor, create or re-use an execution role, such as ```lambda_basic_execution```
1. Click Next and create the function.
1. Make note of the Lambda ARN, shown near the top right, such as
 *  ``` arn:aws:lambda:us-east-1:333304287777:function:HelloWorld ```


#### Skill
1. Create a new Skill called HelloWorld with invocation name ```hello world```.
1. Paste in the [IntentSchema.json](./speechAssets/IntentSchema.json) :
    ```
    {
      "intents": [
        { "intent": "MyIntent" }
      ]
    }
    ```
1. Paste in the [SampleUtterances.txt](speechAssets/SampleUtterances.txt) :
    ```
    MyIntent hello
    ```
1. Configure the skill endpoint with the AWS Lambda ARN previously created.

#### Test
* Say "open hello world" and Alexa should reply with "hello world"
* Modify code within the Lambda function editor to have Alexa say something besides Hello World.
* Test and hear Alexa say the new response.



