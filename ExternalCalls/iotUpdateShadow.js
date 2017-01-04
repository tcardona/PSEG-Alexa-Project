
var aws = require('aws-sdk');
// aws-sdk is a default part of Lambda.  Install locally with NPM:  https://www.npmjs.com/package/aws-sdk
// Full doc on aws-sdk   http://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/welcome.html

const config = {};
config.IOT_BROKER_ENDPOINT      = "a2eshrcp6u0y0c.iot.us-east-1.amazonaws.com".toLowerCase();
config.IOT_BROKER_REGION        = "us-east-1";
config.IOT_THING_NAME           = "waterPump";

// MQTT clients can subscribe to topic  $aws/things/waterPump/shadow/update/accepted

module.exports = {

        setShadow: (payload,  callback) => {
            var payloadObj = { "state":
                {
                    "desired": payload
                }
            };

            //Prepare the parameters of the update call
            var paramsUpdate = {
                "thingName" : config.IOT_THING_NAME,
                "payload" : JSON.stringify(payloadObj)
            };

            aws.config.region = config.IOT_BROKER_REGION;

            //Initializing client for IoT

            var iotData = new aws.IotData({endpoint: config.IOT_BROKER_ENDPOINT});

            console.log("new aws.IotData made");
            console.log("config = " + JSON.stringify(config));

            //Update Device Shadow

            iotData.updateThingShadow(paramsUpdate, function(err, data)  {
                if (err){
                    console.log("error calling updateThingShadow ", err);
                    callback("not ok");

                }
                else {
                    console.log("updated the shadow");
                    // console.log(data);

                    callback("ok");

                }

            });

        }

}

