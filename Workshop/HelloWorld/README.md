#### Alexa Cookbook
## Hello World <a id="title"></a>
<hr />

### Intro <a id="intro"></a>


### This is a simple tutorial to introduce the simplest possible Alexa skill and code.
#### Pre-requisites:
 * Accounts on [AWS.Amazon.com] and [Developer.Amazon.com]

### Steps
#### Code
1. Create a new AWS Lambda function called HelloWorld
1. Be sure to use the N. Virginia Region and add the trigger *Alexa Skills Kit*
1. Paste in the source code from [src/index.js](./src/index.js) :
```
exports.handler = function( event, context ) {

    var say = "Hello World";

    var response = {
        outputSpeech: {
            type: "SSML",
            ssml: "<speak>" + say + "</speak>"
        },
        shouldEndSession: true
    };

    context.succeed( { response: response } );
};
```
1. Create or re-use an execution role, such as ```lambda_basic_execution```
1. Make note of the Lambda ARN, shown near the top right, such as ```arn:aws:lambda:us-east-1:333304287777:function:HelloWorld```


#### Skill
1. Create a new Skill called HelloWorld with invocation name "hello world".
1. Paste in the [IntentSchema.json](./speechAssets/IntentSchema.json)
1. Paste in the [SampleUtterances.txt](speechAssets/SampleUtterances.txt).
1. Configure your skill with the Lambda ARN previously created.

#### Test
* Say "open hello world" and Alexa should reply with "hello world"
* Modify code within the Lambda function editor to have Alexa say something besides Hello World.
* Test and hear Alexa say the new response.



