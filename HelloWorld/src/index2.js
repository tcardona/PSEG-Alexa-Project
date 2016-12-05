// Lambda Node.JS

exports.handler = function( event, context ) {

    var response = {
        outputSpeech: {
            type: "SSML",
            ssml: "<speak> hello world </speak>"
        },
        shouldEndSession: true
    };

    console.log("Hello World ran." );

    context.succeed( { response: response } );

};




