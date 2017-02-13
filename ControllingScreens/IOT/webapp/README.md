### Alexa Cookbook
## Single Page Web App - with MQTT client <a id="title"></a>
<hr />

### Intro
Alexa skills that exist purely as audio applications have enjoyed success and have a great future.
Alexa users can request music, control home devices, and interact with thousands of Alexa skills; all while their hands are busy, their phones are in a pocket, or are being charged elsewhere.

For an additional mode of communication with the user, Alexa skills can send simple,
lightly formatted data to be shown to the user as a "card" on their phone's Alexa app or via the alexa.amazon.com page.

Many web developers would like to enhance and extend this concept of a companion screen and gain full control of the formatting and behavior of the screen experience.
A screen could be setup in a number of scenarios: as a public kiosk, on a wall mounted screen within the home, or via any device with a web browser.

### Networking
Alexa skills that use AWS Lambda functions have access to directly call any resource visible to them; including other AWS services, and any public API or service.

A Lambda function cannot normally initiate a connection to access private resources, such as servers behind a firewall, web browsers, or mobile phones.
However, a web browser can initiate a connection to AWS that stays open and listens for new events from the AWS cloud.
In this way, a browser app can receive so-called "push" notifications that originate from an Alexa skill event.

### IOT
You can configure a new virtual device within AWS IOT, that serves as a type of message bus for updating other applications.
A virtual thing, such as the ```waterPump```, allows Lambda functions to update the device's **desired** state.
Normally for IOT, the desired state is simple ON or OFF, but it could also be a much richer data structure.

### Skill state
When your Alexa skill responds to an utterance, there are three major types of information that are useful:

1. The name of the Intent (or request type) and any slot values
1. The current state of the session.attributes
1. The speech output words that the user will hear

THis state is summarized within this JSON block that can be written to your IOT device:

```
{
    "desired":
       {
            "intent"        : Intent,
            "attributes"    : this.event.session.attributes,
            "say"           : speechOutput
       }
}


### MQTT


Back to the [Controlling Screens Page](../README.md#title)


