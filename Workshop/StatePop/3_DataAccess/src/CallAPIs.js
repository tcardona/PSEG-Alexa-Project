var https = require('http');

module.exports = {

    getPopMock: function(myState, callback) {
        var population = 5000;
        callback(population);
    },
    getPopFromAPI_POST: function(myState, callback) {

        var population = 0;
        var rank = 0;

        var post_data = {"usstate": myState};

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


    },

    getPopFromAPI_GET: (myState, callback) => {

        // try GET in your browser:
        // https://rmwum5l4zc.execute-api.us-east-1.amazonaws.com/prod/stateresource?usstate=Virginia

        var population = 0;
        var rank = 0;

        var options = {

            host: 'sample-env-1.esjj53b7ff.us-west-2.elasticbeanstalk.com',
            port: 80,
            path: '/accounts',
            method: 'GET'
        };
        console.log("options");
        console.log(JSON.stringify(options));

        var req = https.request(options, res => {
            res.setEncoding('utf8');
            var returnData = "";

            res.on('data', chunk => {
                //console.log("in chunk");
                returnData += chunk;
            });

            res.on('end',  () => {
                //console.log("in end");

                //console.log(JSON.stringify(returnData));
                var retdata = JSON.parse(returnData);
                //console.log(retdata.accounts.deposit.accountSummary[0].availableBalancePvtEncrypt);

                // this particular API returns a JSON structure:
                // returnData: {"usstate":"Delaware","attributes":[{"population":900000},{"rank":45}]}

                population = retdata.accounts.deposit.accountSummary[0].availableBalancePvtEncrypt;
                //console.log("I GETTED " + population);

                callback(population);

            });


        });
        req.end();


    },

    getPopFromArray:  function (myState, callback) {
        var population = 0;
        var rank = 0;

        var dataset = require('./datafiles/dataset.js');  // separate file also deployed to Lambda in ZIP archive

        for (var i = 0; i < dataset.length; i++) {
            if (dataset[i].Name.toLowerCase() === myState.toLowerCase() ) {
                population = dataset[i].population;
                rank = dataset[i].rank;

            }
        }
        callback(population);
    },
    RandomPhrase: function (listOfPhrases, callback) {

        var i = 0;
        i = Math.floor(Math.random() * listOfPhrases.length);
        callback(listOfPhrases [i]);

    }
};

