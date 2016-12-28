#### Alexa Cookbook
## External Calls <a id="title"></a>
<hr />

### Intro <a id="intro"></a>
Alexa skill developers can take advantage of external APIs and services available within AWS and on the Internet.
Skill code could perform a lookup in a file or database, or make a REST call to a third-party service, to retrieve information the user requests, or to transmit a message to another user or application.

We can design special functions to simplify the process of sending and receiving data from a service.  The service function will hide all the details of the function call and allow us to simply send and receive data.
The examples here assume your skill code is written as a Lambda Node.js function.


Skill code can use the built-in HTTPS module to make service POST and GET calls.
See the [HTTPS reference docs](https://nodejs.org/api/https.html).
+ [POST](httpsPost.js)
+ [GET](./httpsGet.js)

Skill code can make use of the AWS SDK for Javascript in Node.js.
See the [AWS SDK reference docs](https://aws.amazon.com/sdk-for-node-js/)

+ Read
+ Write

### Code

#### Javascript


### Skill Configuration

These examples can be used by a sample skill called State Pop.
The language model for State Pop expects the user to say the name of a US State, such as Florida.
The State name is sent to the external service, and the state's population is returned to the calling code.


Create the State Pop sample skill

1. Create a new skill on the [Developer Portal](https://developer.amazon.com/edw/home.html#/skills/list).
1. Call your skill ```state pop``` with invocation name ```state pop```.
1. Copy and paste the Intent Schema below into the Interaction Model page.

#### Intent Schema

```
{
  "intents": [
  {      "intent": "StateRequestIntent"
      "slots":[
              {
                "name":"usstate",
                "type":"AMAZON.US_STATE"
              }
            ]
      }
  ]
}
```

#### Sample Utterances
Copy and paste the Sample Utterances into the Interaction Model page.
```
StateRequestIntent go to {usstate}
StateRequestIntent tell me about {usstate}

```

### Resources


Back to the [Home Page](../README.md#title)

