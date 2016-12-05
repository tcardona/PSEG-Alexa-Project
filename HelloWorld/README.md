#### Alexa Cookbook
## Hello World
<hr />

This is a special project with a brief walk-through of creating a lambda function based on the Fact template, and skill.
We will start with the Fact blueprint since this template will deploy with the [alexa-sdk](https://www.npmjs.com/package/alexa-sdk) module.  We can then replace the code with our custom code and continue to reference the alexa-sdk.

The remaining projects will assume you are familiar with the process to create a skill,
 and show only the relevant language model and code.

### Skill code: Create a new Lambda function
1. Login to the [AWS Console](https://console.aws.amazon.com/lambda/home).
1. From the top-right, select either region **N. Virginia** or **EU Ireland**.
1. Click **Create a Lambda function**.
 + Search for a blueprint template called "fact".
 + Select ```alexa-skill-kit-sdk-factskill```
 + On the **Configure triggers** page, click in the empty square, and select **Alexa Skills Kit** as the trigger.
 + On the **Configure function** page, name your function ```HelloWorld```
 + Choose your previously used Alexa IAM role (such as ```lambda_basic_execution```) and complete the wizard.
1. Return to your function, click the "code" tab.
1. Delete all the code, and paste in the new Javascript code shown below, and click save.
 + This code makes use of the ```alexa-sdk``` which is installed and available when you begin with the fact blueprint.


#### Javascript

``` javascript
// Lambda Node.JS
'use strict';

const Alexa = require('alexa-sdk');

const APP_ID = undefined;  // TODO replace with your app ID (OPTIONAL).

exports.handler = function (event, context, callback) {
    var alexa = Alexa.handler(event, context);

    alexa.registerHandlers(handlers); // (State1Handlers, State2Handlers);
    alexa.execute();

};

const handlers = {
    'LaunchRequest': function () {
        this.emit('HelloWorldIntent');
    },

    'HelloWorldIntent': function () {
        this.emit(':tell', 'Hello World!');
    }

}
```
On the top right, notice skill's ARN, such as ```arn:aws:lambda:us-east-1:1234444441234:function:HelloWorld```

### Skill Configuration

1. Create a new skill on the [Developer Portal](https://developer.amazon.com/edw/home.html#/skills/list).
1. Call your skill ```hello world``` with invocation name ```hello world```.
1. Copy and paste the Intent Schema below into the Interaction Model page.


#### Intent Schema

```
{
  "intents": [
  {      "intent": "HelloWorldIntent"    }
  ]
}
```


#### Sample Utterances
Copy and paste the Sample Utterances into the Interaction Model page.
```
HelloWorldIntent hello
HelloWorldIntent hi
```
Click **Next**.

#### Configure Skill Endpoint
On the Configuration page, Global Fields panel:
1. Choose AWS Lambda ARN and select your default geographic region.
1. Copy and paste in the ARN string from your HelloWorld function, above.
1. Click **Next**

### Test your Skill
1. On the Test page, you should now have four green checkboxes on the left panel.
1. Scroll down to the Service Simulator textbox, and type in ```hi```
1. You should see a block of JSON in the Lambda Response panel.
1. Click the play button to hear the speech output.

 + You can now test this skill on [EchoSim.IO](https://echosim.io) and on your Alexa-enabled device.
 + You do not need to publish your skill to begin testing it on your device.
 + Say out loud: ```open hello world, hi```



Back to the [Table of Contents](../README.md)
