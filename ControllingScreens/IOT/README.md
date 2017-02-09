### Alexa Cookbook
## IOT Push <a id="title"></a>
<hr />

### Intro
AWS Lambda functions can make calls to update the state of IOT devices.  The developer can prepare a JSON block of data that will be delivered to the device.


### Blog Post
Read the [Tutorial on how to configure an Alexa Skill to update an IOT Device shadow](https://developer.amazon.com/blogs/post/Tx3828JHC7O9GZ9/Using-Alexa-Skills-Kit-and-AWS-IoT-to-Voice-Control-Connected-Devices).

Read [how to Monitor device updates with the MQTT console](http://docs.aws.amazon.com/iot/latest/developerguide/view-mqtt-messages.html).

** Installation Steps - AWS components and Web App

** Back-end AWS components

*** Create Cognito Identity Pool

1. From the AWS Console, click on the Cognito service.
1. Create a new Identity Pool
1. Choose "Manage Federated Identities"
1. Create a new pool with name ```myPool```
1. Click the checkbox to "Enable access to unauthenticated identities."
1. On the Sample Code page, locate and save the new IdentityPoolId string in red within the source code, such as ```us-east-1:583dd84a-7792-49a6-9ce5-5624f8033333```


*** Setup IAM Roles
The Cognito pool created two new roles.

1. Launch AWS IAM and click on Roles.
1. Click on the role called ```Cognito_myPoolUnauth_Role```
1. Click the Attach Policy button and select a policy such as ```AWSIoTDataAccess```

Grant your Lambda function role permissions to update an IOT thing.

1. Locate and click on the IAM role your skill uses such as ```lambda_basic_execution```
1. Click the Attach Policy button and select a policy such as ```AWSIoTDataAccess```



*** Create IOT Thing
1. Launch the AWS IOT service.
1. From the left menu, click Registry, Things, and click the button to Register a Thing
1. Give your thing the name ```waterPump```
1. Once your thing is created, review the left menu and click on the word Interact
1. You will see a Thing Shadow REST API Endpoint.  Copy it.
1. Save this endpoint into the ./awsconfig.json configuration setting: ```mqttEndpoint```






Back to the [Controlling Screens Page](../README.md#title)

