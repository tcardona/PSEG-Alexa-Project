
// AWS SES Javascript example
// For Alexa Skills, copy and paste the first code block into one of your Intent Handlers
// You will need to grant SES permissions via IAM;
// 1. From the AWS console, click on IAM
// 2. Locate and click on the role you use with your Lambda functions, such as "lambda_basic_execution"
// 3. Click the "Attach Policy" button
// 4. For a quick demo, on "ses" and attach the AmazonSESFullAccess policy.
// 5. For a production scenario, choose a more fine-grained policy granting access to certain resources.
//    Review http://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_manage.html
// 6. SES email recipients must opt-in before receiving further emails from SES
//    Review https://console.aws.amazon.com/ses/home?verified-senders-email:
//           http://docs.aws.amazon.com/ses/latest/DeveloperGuide/mailbox-simulator.html



const subject = 'hello ';
const bodyText = 'hello body';
const params = {

    Source: 'robm266@yahoo.com',
    Destination: { ToAddresses: ['robm266@yahoo.com'] },
    Message: { Subject: { Data: subject }, Body: { Text: { Data: bodyText } } },

};


sendMessage(params, callback=>{

    console.log('sending message to ' + params.Destination.ToAddresses.toString() + ', status: ' );
    var say = 'sent the msg';

    this.emit(':ask', say, 'try again');

});


// ---- HELPER FUNCTION ------------------------------------------------------------------------------
// Add this function to your Alexa Lambda project.
// For example, paste in at the very end of index.js, after your handlers section


function sendMessage(params, callback) {

    var AWS = require('aws-sdk');
    // AWS.config.loadFromPath('./awsconfig.json');

    var SES = new AWS.SES();


    console.log('sending message');

    SES.sendEmail(params, function(err, data){

        if (err) console.log(err, err.stack);

        callback('message sent');

    });

}
