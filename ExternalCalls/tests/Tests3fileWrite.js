
var Mys3fileWrite = require("../s3fileWrite.js");

// This test script can be executed on your command line:
// node Tests3fileWrite.js

var myRequest = "Florida";
var myResult;


Mys3fileWrite.s3fileWrite(myRequest,  myResult => {
        console.log("sent     : " + myRequest);
        console.log("received : " + myResult);


    }
);

