#### Alexa Cookbook
## External Calls <a id="title"></a>
<hr />

### Intro <a id="intro"></a>
Alexa skill developers can take advantage of external APIs and services available within AWS and on the Internet.
Skill code could perform a lookup in a file or database, or make a REST call to a third-party service, to retrieve information the user requests, or to transmit a message to another user or application.

We can design special functions to simplify the process of sending and receiving data from a service.  The service function will hide all the details of the function call and allow us to simply send and receive data.
The examples here assume your skill code is written as a Lambda Node.js function.
A series of individual functions is provided.  You can copy and paste the code, or add the individual source files to your project with the "require" directive within your main code file.  For details on "require", see [Node.js modules docs](https://nodejs.org/api/modules.html)




### Functions
Skill code can use the built-in HTTPS module to make service POST and GET calls.
See the [HTTPS reference docs](https://nodejs.org/api/https.html).
+ [POST sample function](httpsPost.js)
+ [GET sample function](httpsGet.js)


Skill code can make use of the AWS SDK for Javascript in Node.js.  This Node module is automatically included and available to AWS Lambda functions.
See the [AWS SDK reference docs](https://aws.amazon.com/sdk-for-node-js/).
+ [S3 file read sample function](s3fileRead.js)
+ [S3 file write sample function](s3fileWrite.js)

*Lambda functions that call out to other AWS services such as S3 require additional permissions, beyond those in the default Lambda Basic Execution role.
 [Read more about Lambda IAM Roles & Policies](http://docs.aws.amazon.com/lambda/latest/dg/with-userapp-walkthrough-custom-events-create-iam-role.html),
 or add policy permissions to your role in the [IAM Role Console](https://console.aws.amazon.com/iam/home?roles#/home)*

### Testing
These function modules can be tested by adding them to an existing skill, or individually via your local command line.


For details, see the [TEST](tests#title) project folder.


Back to the [Home Page](../README.md#title)

