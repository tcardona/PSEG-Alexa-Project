#### Alexa Cookbook
## Hello World <a id="title"></a>
<hr />

### Intro <a id="intro"></a>


### This is a simple tutorial to introduce the simplest possible Alexa skill and code.
#### Pre-requisites:
1. Accounts on AWS.Amazon.com and Developer.Amazon.com


### Code
1. Create a new AWS Lambda function called HelloWorld
2. Paste in the source code from [src/index.js](./src/index.js)

### Skill
1. Create a new Skill called HelloWorld with invocation name "hello world".
2. Use the [IntentSchema.json](./speechAssets/IntentSchema.json) and [SampleUtterances.txt](speechAssets/SampleUtterances.txt) to configure your skill interaction model.
3. Configure your skill with the Lambda ARN previously created.

### Test
* Say "open hello world" and Alexa should reply with "hello world"
* Modify code within the Lambda function editor to have Alexa say something besides Hello World.
* Test and hear Alexa say the new response.



