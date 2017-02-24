
// AWS SES Javascript example
// For Alexa Skills, copy and paste the first 20 lines of code into one of your Intent Handlers
//  Then, copy the sendMessage() function to the very end of your code, after the handlers.

// You will need to grant SES permissions via IAM;
// 1. From the AWS console, click on IAM
// 2. Locate and click on the role you use with your Lambda functions, such as "lambda_basic_execution"
// 3. Click the "Attach Policy" button
// 4. For a quick demo, filter on "ses" and attach the AmazonSESFullAccess policy.
// 5. For a production scenario, choose a more fine-grained policy granting access to certain resources.
//    Review http://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_manage.html
// 6. SES email recipients must first respond to a verification email you send, before receiving further emails from SES.
//    Review https://console.aws.amazon.com/ses/home?verified-senders-email:
//           http://docs.aws.amazon.com/ses/latest/DeveloperGuide/mailbox-simulator.html

// 7. within one of your Intent Handler functions, comment out ```this.emit()```, and paste in these consts and sendMessage function call.
// 8. Modify the source and destination email addresses, and the body text.


    const subject = 'Hello' ;
    const bodyText = 'Hello! \n'
        + 'Here is your link:  \n'
        + 'https://youtu.be/dQw4w9WgXcQ';


    const params = {

        Source: 'robm266@alexamailbox.com',
        Destination: { ToAddresses: ['robm266@alexamailbox.com'] },
        Message: {
            Subject: { Data: subject },
            Body: { Text: { Data: bodyText } }
        },

    };

    sendMessage(params, callback=>{
        console.log('sending message to ' + params.Destination.ToAddresses.toString() + ', status: ' );
        var say = 'sent the msg';

        this.emit(':ask', say, 'try again');
    });



// ---- HELPER FUNCTION ------------------------------------------------------------------------------
// Add this function after the handlers.
// For example, scroll to the very end of index.js, after your handlers section, and paste:


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
