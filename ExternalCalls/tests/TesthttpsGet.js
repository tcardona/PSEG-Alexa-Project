
var MyhttpsGet = require("../httpsGet.js");

// This test script can be executed on your command line:
// node TestmockGet.js

var myRequest = "Florida";
var myResult;


MyhttpsGet.httpsGet(myRequest,  myResult => {
        console.log("sent     : " + myRequest);
        console.log("received : " + myResult);


    }
);

