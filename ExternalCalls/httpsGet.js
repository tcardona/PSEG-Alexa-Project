var https = require('https');
// https is a default part of Node.JS.  Read the developer doc:  https://nodejs.org/api/https.html
// try other APIs such as the current bitcoin price : https://btc-e.com/api/2/btc_usd/ticker  returns ticker.last


module.exports = {

    httpsGet : function(myData, callback) {

        // GET is a web service request that is fully defined by a URL string
        // Try GET in your browser:
        // https://rmwum5l4zc.execute-api.us-east-1.amazonaws.com/prod/stateresource?usstate=Virginia


        var result = 0;

        var options = {
            host: 'rmwum5l4zc.execute-api.us-east-1.amazonaws.com',
            port: 443,
            path: '/prod/stateresource?usstate=' + encodeURIComponent(myData),
            method: 'GET'
        };

        var req = https.request(options, res => {
                res.setEncoding('utf8');
            var returnData = "";

            res.on('data', chunk => {
                returnData = returnData + chunk;
            });

            res.on('end',  () => {
                // we have now received the raw return data in the returnData variable.
                // e.g. {"usstate":"Florida","attributes":[{"population":20300000},{"rank":3}]}
                // We can see it in the log output via:
                // console.log(JSON.stringify(returnData))
                // we may need to parse through it to extract the needed data


                var pop = JSON.parse(returnData).attributes[0].population;


                callback(pop);


            });

        });
        req.end();

    }

}


