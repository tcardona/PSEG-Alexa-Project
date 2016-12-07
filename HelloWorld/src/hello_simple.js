
exports.handler = function( event, context ) {

    var say = "hello world from simple lambda";

    var response = {
        outputSpeech: {
            type: "SSML",
            ssml: "<speak>" + say + "</speak>"
        },
        shouldEndSession: true
    };

    context.succeed( { response: response } );

};



