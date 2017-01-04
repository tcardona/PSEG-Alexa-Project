#### Alexa Cookbook
## Developer Tools
<hr />

### Intro
Alexa skill developers can take advantage of several tools to automate and streamline their development processes.

### Code
#### Javascript
There are several tools and utilities that make your life easier as you build and test your Skill code:


+ [Atom IDE](https://atom.io/) - A free code editor tool (IDE)
+ [AWS CLI](https://aws.amazon.com/cli/) - A command line utility to create and manage AWS resources
+ [Automate publishing your skill code to Lambda](https://developer.amazon.com/public/community/post/Tx1UE9W1NQ0GYII/Publishing-Your-Skill-Code-to-Lambda-via-the-Command-Line-Interface) blog post
+ [Node.JS](https://nodejs.org/en/), the default runtime platform for Lambda fuctions.
+ [NPM](https://www.npmjs.com/), the Node Package Manager
+ [lambda-local](https://www.npmjs.com/package/lambda-local), a node module for testing Lambda code on your laptop.
+ [Chai](http://chaijs.com/), a javascript test and assertion library
+ [Mocha](https://mochajs.org/), a javascript testing framework

### Testing
You can test your skill in a number of ways.   You do not need to publish your skill before you can begin testing and using it.

+ Type in your utterance to the Service Simulator, within the Test page of your skill on the [Developer Portal](https://developer.amazon.com/edw/home.html#/skills/list).
+ Launch [EchoSim.IO](https://echosim.io), the browser based testing tool.
+ Your skill can be launched on any Alexa device you own or have registered, such as Echo, Tap, Dot.
+ You can test your Lambda code from the [Lambda Console](https://console.aws.amazon.com/lambda/home). Click **Actions**, **Configure Test Event**, and select or paste in a test request.
+ You can configure command line tests using the Node.js module [lambda-local](https://www.npmjs.com/package/lambda-local).
+ You can write a javascript test function that calls your skill code directly.  See [testHelloWorld.js](../HelloWorld/tests/testHelloWorld.js).


### Resources
See [developer.amazon.com/ask](https://developer.amazon.com/ask) for more information.


Back to the [Workshop](../README.md#title)

