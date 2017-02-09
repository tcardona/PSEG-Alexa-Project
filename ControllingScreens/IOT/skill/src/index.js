
var Alexa = require('alexa-sdk');
var https = require('https');
var aws = require('aws-sdk');



var config = {};

config.IOT_BROKER_ENDPOINT      = "a3npzlqqxxxxx.iot.us-east-1.amazonaws.com".toLowerCase();  // aka mqttEndpoint
config.IOT_BROKER_REGION        = "us-east-1";
config.IOT_THING_NAME           = "waterPump";


exports.handler = function(event, context, callback){

    var alexa = Alexa.handler(event, context);
    // alexa.appId = "amzn1.echo-sdk-ams.app.8c97fc78-342a-4e4f-823b-e2f91e7f3474";
    // alexa.dynamoDBTableName = 'YourTableName';

    alexa.registerHandlers(handlers);
    alexa.execute();

};


var handlers = {
    'LaunchRequest': function () {
        // this.emit('');

        var say = 'Welcome! Say the name of a U.S. State and I will tell you the population.';
        // this.emit(':ask', say, 'try again');
        this.emit(':ask', say, 'try again');
    },

    'sayWithIOT': function(responseType, speechOutput, reprompt) {
        var Intent = {};
        if (this.event.request.type == "IntentRequest") {
            Intent = this.event.request.intent;
        } else {
            Intent = {"name" : this.event.request.type };
        }

        var pload = {
                        "intent"        : Intent,
                        "attributes"    : this.event.session.attributes,
                        "say"           : speechOutput
        };

        console.log("pload :")  ;
        console.log(JSON.stringify(pload));

        CallAPIs.setShadow(pload, config, (status) => {

                console.log("set shadow and status is " + status);
                this.emit(responseType, speechOutput, reprompt);

            }
        );

    },
    'StateRequestIntent': function () {
        var myState = this.event.request.intent.slots.usstate.value;
        var say = '';

        // create and store session attributes
        if (!this.attributes['myList']) {
            this.attributes['myList'] = [];  // empty array
        }

        this.attributes['myList'].push(myState);  // add array element

        var that = this;

        // CallAPIs.getPopMock(myState, pop => {
        CallAPIs.getPopFromAPI_GET(myState, pop => {

            say = 'The population of ' + myState + ' is ' + pop;

            console.log("say = " + say);

            this.emit('sayWithIOT', ':ask', say, 'try again');

        });
    },
    'MyNameIsIntent': function() {

        var myName = this.event.request.intent.slots.myName.value;
        var say = "";

        if (myName == null) { // no slot
            say = 'You can tell me your name, for example, you can say my name is Natasha.';
        } else {
            // create and store session attributes
            this.attributes['myName'] = myName;
            say = 'Hi ' + myName + '!';
        }

        this.emit('sayWithIOT', ':ask', say, 'try again');
        // this.emit(':ask', say, 'try again');
    },
    'RecapIntent': function() {
        // this.handler.state = states.GUESSMODE;

        // create and store session attributes
        if (!this.attributes['myList']) {
            this.attributes['myList'] = [];  // empty array
        }

        var stateList  = this.attributes['myList'].toString();  // add array element
        var stateCount =  this.attributes['myList'].length;

        var say = 'Your list has the following ' + stateCount + ' states. ' + stateList;

        // this.emit(':ask', say, 'try again');
        this.emit('sayWithIOT', ':ask', say, 'try again');
    },

    'AMAZON.HelpIntent': function () {
        this.emit('sayWithIOT', ':ask', 'Say the name of a U.S. State.', 'try again');
    },

    'AMAZON.StopIntent': function () {
        var say = '';
        var myName = '';
        if (this.attributes['myName'] ) {
            myName = this.attributes['myName'];
        }
        say = 'Goodbye, ' + myName;

        // this.emit(':tell', say );
        this.emit('sayWithIOT', ':tell', say, 'try again');
    },
    'AMAZON.CancelIntent': function () {
        var say = '';
        var myName = '';
        if (this.attributes['myName'] ) {
            myName = this.attributes['myName'];
        }
        say = 'Goodbye, ' + myName;

        // this.emit(':tell', say );
        this.emit('sayWithIOT', ':tell', say, 'try again');
    }
}
// end of handlers

// ---------------------------------------------------  User Defined Functions ---------------

var CallAPIs = {

    setShadow: (pload, config, callback) => {
        var payloadObj={ "state":
            {
                "desired": pload
            }
        };

        var paramsUpdate = {

            "thingName" : config.IOT_THING_NAME,

            "payload" : JSON.stringify(payloadObj)

        };

        aws.config.region = config.IOT_BROKER_REGION;

        //Initializing client for IoT

        var iotData = new aws.IotData({endpoint: config.IOT_BROKER_ENDPOINT});

        console.log("iot config = " + JSON.stringify(config));

        //Update Device Shadow

        iotData.updateThingShadow(paramsUpdate, function(err, data)  {
            if (err){
                console.log("error calling updateThingShadow ", err);
                callback("not ok");

            }
            else {
                console.log("updated your thing : " + paramsUpdate.thingName);
                console.log(data);

                callback("ok");

            }

        });

    },

    getPopMock: function(myState, callback) {
        var population = 5000;
        callback(population);
    },

    getPopFromAPI_GET: (myState, callback) => {

        // try call this GET service in your browser:
        // https://cp6gckjt97.execute-api.us-east-1.amazonaws.com/prod/stateresource?usstate=Virginia

        var population = 0;

        var options = {

            host: 'cp6gckjt97.execute-api.us-east-1.amazonaws.com',
            port: 443,
            path: '/prod/stateresource?usstate=' + encodeURI(myState),
            method: 'GET'
        };
        console.log("options");
        console.log(JSON.stringify(options));

        var req = https.request(options, res => {
            res.setEncoding('utf8');
            var returnData = "";

            res.on('data', chunk => {
                //console.log("in chunk");
                returnData += chunk;
            });

            res.on('end',  () => {

                console.log(JSON.stringify(returnData));
                var retdata = JSON.parse(returnData);

                // this  API returns a JSON structure:

                population = retdata.population;


                callback(population);

            });


        });
        req.end();


    }


}

