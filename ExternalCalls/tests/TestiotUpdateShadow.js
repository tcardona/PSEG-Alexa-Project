
// this test can be run from your local Node command line
// node test.js

var MyiotUpdateShadow = require("../iotUpdateShadow.js");

// This test script can be executed on your command line:
// node TestmockGet.js

var myData = {"name":""};

var myResult;


MyiotUpdateShadow.setShadow(myData,  myResult => {
        console.log("sent     : " + JSON.stringify(myData));
        console.log("received : " + myResult);

    }
);

