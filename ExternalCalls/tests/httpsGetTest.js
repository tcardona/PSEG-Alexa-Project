/**
 * Created by mccaul on 12/12/16.
 */

var myGetFunction = require("../httpsGet.js");

// This test script can be executed on your command line:
// node httpsGetTest

var myRequest = "Ohio";
var myResult;

console.log("calling : httpsGet()");
console.log("sending : " + myRequest);

myGetFunction.httpsGet(myRequest,  myResult => {

        console.log("received: " + myResult);

    }
);

