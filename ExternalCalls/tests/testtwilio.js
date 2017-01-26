
// this test can be run from your local Node command line
// node test.js

var myTwilio = require("../twilio.js");

// This test script can be executed on your command line:
// node TestmockGet.js

var myRecipient = "5082598463";
var myMessage = "I will meet you for breakfast";



var accountSid = 'AC9cb2cd93f4b4723a4d3241d25fa79144';
var authToken = '77ad3c086eab04e1b06faa1b3b2e377e';




myTwilio.sendSMS(myRecipient, myMessage,  myResult => {
        console.log("sent     : ", myRecipient, myMessage);
        console.log("received : ", myResult);

    }
);

