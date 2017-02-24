
// AWS SNS Javascript example
// For Alexa Skills, copy and paste the first code block into one of your Intent Handlers.
//  Then, copy the sendTxtMessage() function to the very end of your code, after the handlers.

// You will need to grant SNS permissions via IAM;
// 1. From the AWS console, click on IAM
// 2. Locate and click on the role you use with your Lambda functions, such as "lambda_basic_execution"
// 3. Click the "Attach Policy" button
// 4. For a quick demo, on "sns" and attach the AmazonSNSFullAccess policy.
// 5. For a production scenario, choose a more fine-grained policy granting access to certain resources.
//    Review http://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_manage.html
// 6. Customize the target PhoneNumber value


    const emoji = {
        'thumbsup': '\uD83D\uDC4D',
        'smile': '\uD83D\uDE0A',
        'star': '\uD83C\uDF1F',
        'robot': '\uD83E\uDD16'
    }

    const bodyText = 'Hello! ' + emoji.smile + ' \n'
        + 'Here is your link: \n'
        + 'https://youtu.be/dQw4w9WgXcQ';

    const params = {
        PhoneNumber: '+15082598463',
        Message: bodyText
    };

    sendTxtMessage(params, callback=>{

        console.log('sending message to ' + params.PHONE_NUMBER.toString() );
        var say = 'sent the msg';

        this.emit(':ask', say, 'try again');

    });


// ---- HELPER FUNCTION ------------------------------------------------------------------------------
// Add this function to your Alexa Lambda project.
// For example, paste in at the very end of index.js, after your handlers section


function sendTxtMessage(params, callback) {

    var AWS = require('aws-sdk');
    var SNS = new AWS.SNS();

    SNS.publish(params, function(err, data){

        if (err) console.log(err, err.stack);

        callback('text message sent');

    });
}

