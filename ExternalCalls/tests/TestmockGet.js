
// this test can be run from your local Node command line
// node test.js

var MymockGet = require("../mockGet.js");

// This test script can be executed on your command line:
// node TestmockGet.js

var myRequest = "Florida";
var myResult;


MymockGet.mockGet(myRequest,  myResult => {
        console.log("sent     : " + myRequest);
        console.log("received : " + myResult);

    }
);

