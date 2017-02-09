/**
 * This is a sample Lambda function that requires these SES permissions.
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "ses:GetIdentityVerificationAttributes",
                "ses:SendEmail",
                "ses:VerifyEmailIdentity"
            ],
            "Resource": "*"
        }
    ]
}
 *
 */

'use strict';

const AWS = require('aws-sdk');

const SES = new AWS.SES();
const EMAIL_ADDRESS = 'robm26@gmail.com'; // change it to your email address

// Send a verification email to the given email address.
function sendVerification(email, callback) {
    SES.verifyEmailIdentity({ EmailAddress: email }, (err) => {
        callback(err || 'Verification email sent. Please verify it.');
    });
}

// Check whether email is verified. Only verified emails are allowed to send emails to or from.
function checkEmail(email, callback) {
    SES.getIdentityVerificationAttributes({ Identities: [email] }, (err, data) => {
        if (err) {
            callback(err);
            return;
        }
        const attributes = data.VerificationAttributes;
        if (!(email in attributes) || attributes[email].VerificationStatus !== 'Success') {
            sendVerification(email, callback);
        } else {
            callback(err, data);
        }
    });
}

exports.handler = (event, context, callback) => {
    console.log('Received event:', event);

    checkEmail(EMAIL_ADDRESS, (err) => {
        if (err) {
            console.log(`Failed to check email: ${EMAIL_ADDRESS}`, err);
            callback(err);
            return;
        }
        const payload = JSON.stringify(event);
        const subject = `Hello from your IoT Button ${event.serialNumber}`;
        const bodyText = `Hello from your IoT Button ${event.serialNumber}. Here is the full event: ${payload}.`;
        const params = {
            Source: EMAIL_ADDRESS,
            Destination: { ToAddresses: [EMAIL_ADDRESS] },
            Message: { Subject: { Data: subject }, Body: { Text: { Data: bodyText } } },
        };
        SES.sendEmail(params, callback);
    });
};
