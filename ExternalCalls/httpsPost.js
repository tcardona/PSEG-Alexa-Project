var https = require('https');
// https is a default part of Node.JS.  Read the developer doc:  https://nodejs.org/api/https.html


module.exports = {

    httpsPost: function (myData, callback) {

        // POST requests are more than just a single URL with encoded key value pairs, like GET
        // We must prepare a request data block and POST it to the service endpoint

        var population = 0;
        var rank = 0;

        var post_data = {"usstate": myData};

        var post_options = {
            host:  'rmwum5l4zc.execute-api.us-east-1.amazonaws.com',
            port: '443',
            path: '/prod/stateresource',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': Buffer.byteLength(JSON.stringify(post_data))
            }
        };

        var post_req = https.request(post_options, res => {
            res.setEncoding('utf8');
            var returnData = "";
            res.on('data', chunk =>  {
                returnData += chunk;
            });
            res.on('end', () => {
                // this particular API returns a JSON structure:
                // returnData: {"usstate":"Delaware","attributes":[{"population":900000},{"rank":45}]}

                population = JSON.parse(returnData).attributes[0].population;

                callback(population);

            });
        });
        post_req.write(JSON.stringify(post_data));
        post_req.end();

    }
}

