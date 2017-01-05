### Alexa Cookbook
## Controlling Screens <a id="title"></a>
<hr />

### Intro
The Amazon Echo is designed to be a voice-first experience.  Alexa operates as a cloud-based service and has limited support for interacting with screen devices, such as phones, tablets, and computers.
Developers may return a "card" along with each spoken response, which is a short block of lightly formatted static content displayed on the Alexa mobile app, or alexa.amazon.com page.

### [IOT](IOT#title)
One feature of the [AWS IOT](https://aws.amazon.com/iot/) (Internet of Things) service the ability to send data to a device.  An Alexa Skill developer can make calls from Lambda to update the state of IOT-connected devices.

### IOT MQTT Client
Devices with visual displays can be configured to receive messages from Alexa Skills.  An effective way to accomplish this is to configure the device to act as an IOT Device, using MQTT client code.  Virtual devices, even those behind a firewall, can then start up and establish a web-socket connection to the IOT MQTT network.  An Alexa skill that calls IOT to update the device state will generate an update message within the running client.
The client developer can then use this data to update the screen.
Read more about the [MQTT over WebSockets protocol](http://docs.aws.amazon.com/iot/latest/developerguide/protocols.html)

#### [Web](Web#title)
Web applications that use javascript can load the AWS SDK into the browser, and directly call AWS services.
So-called *single page web apps* can receive and process, and format data from an Alexa skill into visual elements on the browser.
The user may see a menu of options, or a history of previous intents, when watching a web app that is synchronized with an Alexa skill.

#### [Mobile](Mobile#title)


#### [VR](VR#title)




Back to the [Home Page](../README.md#title)

