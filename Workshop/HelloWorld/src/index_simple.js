
exports.handler = function( event, context, callback ) {

    var say = "Hello World from Lambda";

    var response = {
        outputSpeech: {
            type: "SSML",
            ssml: "<speak>" + say + "</speak>"
        },
        shouldEndSession: true
    };

    callback(null, { response: response });

};



