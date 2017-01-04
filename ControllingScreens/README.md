### Alexa Cookbook
## Controlling Screens <a id="title"></a>
<hr />

### Intro
The Amazon Echo is designed to be a voice-first experience.  Alexa operates as a cloud-based service and has limited support for interacting with screen devices, such as phones, tablets, and computers.
Developers may return a "card" along with each spoken response, which is a short block of lightly formatted static content displayed on the Alexa mobile app, or alexa.amazon.com page.

### IOT Push
One feature of the [AWS IOT](https://aws.amazon.com/iot/) (Internet of Things) service the ability to send data to a device.  An Alexa Skill developer can make calls from Lambda to update the state of IOT-connected devices.


### Web
Web applications that use javascript can load the AWS SDK into the browser, and directly call AWS services.  A web app can register itself as an IOT Device, and be directly updated from Alexa skill code that calls the AWS IOT *update device shadow* function.
In this way, web applications can provide a rich visual experience to compliment the voice user interface of an Alexa skill.

### Mobile

### VR




Back to the [Home Page](../README.md#title)

