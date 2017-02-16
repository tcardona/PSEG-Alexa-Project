// magic answers alexa skill code
var Alexa = require('alexa-sdk');
var AWS = require('aws-sdk');

AWS.config.update({
    region: "eu-west-1"
});

// In advance:
// 1. Navigate to the AWS Console, DynamoDB, Tables. Create a new table called "yesno" with primary key of "id".
// 2. Click on "Items" and create a new Item.  Set the value of the id to 0 and click save.

// ensure your Lambda function IAM execution role has DynamoDB policy with permissions to update your table: yesno

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);

    // alexa.appId = 'amzn1.echo-sdk-ams.app.1234';

    // alexa.dynamoDBTableName = 'YourTableNameUK'; // creates new table for session.attributes

    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('AMAZON.HelpIntent');
    },

    'MyIntent': function () {

        var MyQuestion = this.event.request.intent.slots.MyQuestion.value;

        var say = 'hello';

        var docClient = new AWS.DynamoDB.DocumentClient();
        var params = {
            TableName: 'yesno',
            Key:{ "id": '0'  }
        };
        console.log('about to get DynamoDB record from yesno table');


        docClient.get(params, (err, data) => {
            if (err) {
                console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
            } else {
                console.log("GetItem succeeded:", JSON.stringify(data, null, 2));

                say = data.Item.message;

                this.emit(':ask', say, 'try again');

            }
        });


    },
    'AMAZON.HelpIntent': function () {
        this.emit(':ask', 'ask me a yes or no question', 'try again');
    },
    'AMAZON.StopIntent': function () {
        var say = 'Goodbye ';
        this.emit(':tell', say);
    },
    'AMAZON.CancelIntent': function () {
        var say = 'Goodbye ';
        this.emit(':tell', say);
    }

};

