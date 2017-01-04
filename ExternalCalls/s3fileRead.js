var AWS = require('aws-sdk');


module.exports = {

    s3fileRead: function (myData, callback) {
        // call AWS S3
        var s3 = new AWS.S3();

        var params = {
            Bucket: 'alexabucket7',
            Key: 'dataset.csv'
            // this S3 object is in flat file comma-separated value format.
            // State,Population,Rank
            // "California",39100000,1
            // "Texas",27500000,2
        };

        s3.getObject(params, function(err, data) {
            if(err) { console.log(err, err.stack); }
            else {

                var dataset = data.Body.toString();  // this is the complete file contents

                var dataArray = dataset.split('\n'); // array of each line as an element

                for (var i = 1; i < dataArray.length; i++) {

                    var rowArray = dataArray[i].split(',');

                    if (rowArray[0].replace(/"/g,"") == myData) {  // match to requested value

                        pop = rowArray[1];  // get value from the second field

                        callback(pop);

                    }
                }

            }
        });

    }
}

