
var Mys3fileRead = require("../s3fileRead.js");

// This test script can be executed on your command line:
// node Tests3fileRead.js

var myRequest = "Florida";
var myResult;


Mys3fileRead.s3fileRead(myRequest,  myResult => {
        console.log("sent     : " + myRequest);
        console.log("received : " + myResult);


    }
);

