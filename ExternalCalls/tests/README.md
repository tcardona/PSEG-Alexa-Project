#### Alexa Cookbook
## External Calls
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



