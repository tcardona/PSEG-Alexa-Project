// This is a sample skill called State Pop
// It expects to receive a StateRequestIntent with a slot value called usstate.
//

var Alexa = require('alexa-sdk');
var MymockGet = require("../mockGet.js");  // adjust to match your project folder structure

exports.handler = function(event, context, callback){

    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();

};

var handlers = {
    'LaunchRequest': function () {
        var say = 'Welcome!';
        this.emit(':ask', say, 'try again');
    },

    'StateRequestIntent': function() {
        var myState = this.event.request.intent.slots.usstate.value;

        var say = 'You asked for ' + myState;

        MymockGet.mockGet(myState,  myResult => {
                console.log("sent     : " + myState);
                console.log("received : " + myResult);

                say = say + " and the population is " + myResult;

                this.emit(':ask', say, 'try again');

            }
        );

    },

    'AMAZON.HelpIntent': function () {
        this.emit(':ask', 'Say the name of a U.S. State.', 'try again');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Goodbye!');
    }
}
