#### Alexa Cookbook
## Developer Tools
<hr />

### Intro
Alexa skill developers can take advantage of several tools to automate and streamline their development processes.

### Code
#### Javascript
Here are some Amazon utilities:

+ [AWS CLI](https://aws.amazon.com/cli/) - A command line utility to create and manage AWS resources
+ [Automate publishing your skill code to Lambda](https://developer.amazon.com/public/community/post/Tx1UE9W1NQ0GYII/Publishing-Your-Skill-Code-to-Lambda-via-the-Command-Line-Interface) blog post
+ AWS [SDK for Javacript in the Browser](https://aws.amazon.com/sdk-for-browser/)

Here are a list of **NON-AMAZON** tools and utilities that may enhance your developer experience.
Install and use at your own risk.

+ [Atom IDE](https://atom.io/) - A free code editor tool (IDE)

+ [Node.JS](https://nodejs.org/en/), the default runtime platform for Lambda fuctions.

+ **lambda-local**, a node module for testing Lambda code on your laptop.

### Testing
You can test your skill in a number of ways.   You do not need to publish your skill before you can begin testing and using it on any of your devices.

+ Type in your utterance to the Service Simulator, within the Test page of your skill on the [Developer Portal](https://developer.amazon.com/edw/home.html#/skills/list).
+ Launch [EchoSim.IO](https://echosim.io), the browser based testing tool.
+ Your skill can be launched on any Alexa device you own or have registered, such as Echo, Tap, Dot.
+ You can test your Lambda code from the [Lambda Console](https://console.aws.amazon.com/lambda/home). Click **Actions**, **Configure Test Event**, and select or paste in a test req
+ You can write another javascript script that calls your skill code directly.  See [testHelloWorld.js](../HelloWorld/tests/testHelloWorld.js).

### Resources



See [developer.amazon.com/ask](https://developer.amazon.com/ask) for more information.


Back to the [Workshop](../README.md#title)
