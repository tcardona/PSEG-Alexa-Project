
exports.handler = function( event, context, callback ) {

    var say = "Hello World";

    var response = {
        outputSpeech: {
            type: "SSML",
            ssml: "<speak>" + say + "</speak>"
        },
        shouldEndSession: true
    };

    callback(null, { response: response });

};



