### Alexa Cookbook
## IOT Skill - Update Device Shadow <a id="title"></a>
<hr />


### Intro
This guide assumes you are familiar with setting up Alexa skills using AWS Lambda and Node.JS.
This is part 1 of 2, covering the steps to configure and code the back-end.
In part 2, you will learn how to build a web application that receives live updates from the Alexa, via the IOT service.


Each time your user tells Alexa a question or command, the request is processed and sent to the skill code, typically implemented as an AWS Lambda function.
The Lambda functions receives an Intent name, and 0 or more Slot values, along with any session attributes you have previously set.
The main responsibility of the Lambda function is to prepare a response to be returned to the user as audio speech.
In addition, data can be sent to other parts of the AWS cloud, such as the S3 service, DynamoDB, or to the AWS IOT service.

The traditional use pattern for AWS IOT customers is to connect physical devices, such as sensors, fans, motors, or robots to the network.
The AWS IOT service can then send commands to control the device, such as to turn a device on or off, move a device a certain distance, or set the device to any particular desired state.

### Device Shadow
Within the AWS IOT console, you can configure a new device with a name, such as *waterPump*.
The IOT service can update the desired state of the device by updating the **Device Shadow**, which is the logical representation of the physical device.
When the devices is connected to the IOT network, it will receive this desired state and update itself accordingly.


### Blog Post
For a full walk-through of configuring an IOT device and controlling it through Lambda code, please read:

 * [Tutorial on how to configure an Alexa Skill to update an IOT Device shadow](https://developer.amazon.com/blogs/post/Tx3828JHC7O9GZ9/Using-Alexa-Skills-Kit-and-AWS-IoT-to-Voice-Control-Connected-Devices).



Back to the [IOT page](../README.md#title)




