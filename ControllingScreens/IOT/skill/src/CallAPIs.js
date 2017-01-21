// var https = require('https');
var aws = require('aws-sdk');

module.exports = {

     setShadow: (pload, config, callback) => {
        var payloadObj={ "state":
            {
                "desired": pload

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
                console.log("updated your shadow");
                console.log(data);

                callback("ok");

            }

        });

    }
};

