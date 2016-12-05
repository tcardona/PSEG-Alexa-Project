#### Alexa Cookbook
## External Calls
<hr />

### Intro
Alexa skill developers can take advantage of external APIs and services available within AWS and on the Internet.
Skill code could perform a lookup in a file or database, or make a REST call to a third-party service, to retrieve information the user requests, or to transmit a message to another user or application.

Web Services calls
+ POST
+ GET

AWS S3 calls
+ Read
+ Write

### Code
#### Javascript




### Skill Configuration

These examples use a skill called State Pop, that expects the user to say the name of a US State.

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
StateRequestIntent tell me about {usstate}
StateRequestIntent {usstate}
```

### Resources
See [developer.amazon.com/ask](https://developer.amazon.com/ask) for more information


Back to the [Table of Contents](../README.md)

