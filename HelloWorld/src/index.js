// Lambda Node.JS
'use strict';

const Alexa = require('alexa-sdk');

// const APP_ID = undefined;  // TODO replace with your app ID (OPTIONAL).

exports.handler = function (event, context, callback) {
    var alexa = Alexa.handler(event, context);

    alexa.registerHandlers(handlers); // (State1Handlers, State2Handlers);
    alexa.execute();

};

const handlers = {
    'LaunchRequest': function () {
        this.emit('HelloWorldIntent');
    },

    'HelloWorldIntent': function () {
        this.emit(':tell', 'hello world with sdk!');
    }

}




