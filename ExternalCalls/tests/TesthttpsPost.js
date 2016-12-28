
// this test can be run from your local Node command line
// node test.js

var MyhttpsPost = require("../httpsPost.js");

// This test script can be executed on your command line:
// node TestmockGet.js

var myRequest = "Florida";
var myResult;


MyhttpsPost.httpsPost(myRequest,  myResult => {
        console.log("sent     : " + myRequest);
        console.log("received : " + myResult);


    }
);

