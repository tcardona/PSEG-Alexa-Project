#### Alexa Cookbook
## External Calls Testing <a id="title"></a>
<hr />

### Intro
These tests show you how you can create tests to execute the functions that make external calls, outside of the Alexa Skills context.
Verify you have node.js available locally by opening a command prompt and typing ```node --version```

### Testing your functions
Run a test, such as the mock test, by typing:
``` node TestmockGet.js```

Node.js programs can make reference to helper code files that are contained within the project folder.
The file is "required" and given a name.  All the data and functions within the file can then be accessed from this name using dotted notation.

```
var MymockGet = require("../mockGet.js");

var myRequest = "Florida";
var myResult;

MymockGet.mockGet(myRequest,  myResult => {
        console.log("sent     : " + myRequest);
        console.log("received : " + myResult);

    }
);

```

```
sent     : Florida
received : 5000
```

Once you have the mock function working, it will be easy to swap it out for the actual web service functions.

### Customizing Functions



### Test Skill

Another way to test the functions is via a sample skill called State Pop.
The language model for State Pop expects the user to say the name of a US State, such as Florida.
The State name can then be sent to one of the external service functions, and the state's population is returned to the calling code.


#### Create the State Pop sample skill

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

#### Code
Paste in the code from [index.js](index.js)


Back to [ExternalCalls](../README.md#title)