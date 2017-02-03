/**
 * This is a sample Lambda function that sends an SMS and needs one permission sns:Publish.
 * The following policy
 * allows SNS publish to SMS but not topics or endpoints.
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "sns:Publish"
            ],
            "Resource": [
                "*"
            ]
        },
        {
            "Effect": "Deny",
            "Action": [
                "sns:Publish"
            ],
            "Resource": [
                "arn:aws:sns:*:*:*"
            ]
        }
    ]
}
 *
 * The following JSON template shows what is sent as the payload:
{
    "serialNumber": "GXXXXXXXXXXXXXXXXX",
    "batteryVoltage": "xxmV",
    "clickType": "SINGLE" | "DOUBLE" | "LONG"
}
 *
 * A "LONG" clickType is sent if the first press lasts longer than 1.5 seconds.
 * "SINGLE" and "DOUBLE" clickType payloads are sent for short clicks.
 *
 * For more documentation, follow the link below.
 * http://docs.aws.amazon.com/iot/latest/developerguide/iot-lambda-rule.html
 */

'use strict';

const AWS = require('aws-sdk');

const SNS = new AWS.SNS({ apiVersion: '2010-03-31' });
const PHONE_NUMBER = '+15082598463'; // change it to your phone number


exports.handler = (event, context, callback) => {
    console.log('Received event:', event);

    console.log(`Sending SMS to ${PHONE_NUMBER}`);
    const payload = JSON.stringify(event);
    const params = {
        PhoneNumber: PHONE_NUMBER,
        Message: `Hello from your IoT Button ${event.serialNumber}. Here is the full event: ${payload}.`,
    };

    console.log('testing from Minnesota');


    // result will go to function callback
    SNS.publish(params, callback);
};
