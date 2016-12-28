var https = require('https');
// https is a default part of Node.JS.  Read the developer doc:  https://nodejs.org/api/https.html


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

                callback(returnData);

            });

        });
        req.end();

    },
    httpsGetMock: function(myData, callback) {

        var result = 5000;
        console.log("received: " + myData + ", returned: " + result);

        callback(result);  // execute the function that the caller passed in

    }

}


