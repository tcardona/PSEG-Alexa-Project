var AWS = require('aws-sdk');


module.exports = {

    s3fileWrite: function (myData, callback) {
        // call AWS S3
        var s3 = new AWS.S3();

        var params = {
            Bucket: 'alexabucket7',
            Key: 'log.txt',
            Body: myData.toString()
            // this S3 object is in flat file comma-separated value format.
            // State,Population,Rank
            // "California",39100000,1
            // "Texas",27500000,2
        };

        s3.putObject(params, function(err, data) {
            if(err) { console.log(err, err.stack); }
            else {
                callback('ok');
            }
        });

    }
}

