
var APP_ID = undefined;  // TODO replace with your app ID (OPTIONAL).

// var GAME_STATES = {
//     QUESTION: "_QUESTIONMODE", // Asking trivia questions.
//     START: "_STARTMODE", // Entry point, start the game.
//     HELP: "_HELPMODE" // The user is asking for help.
// };


var Alexa = require("alexa-sdk");

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    //alexa.resources = languageString;
    // To enable session persistence, add a dynamoDB table. For example:
    //alexa.dynamoDBTableName = 'alexa-skill-samples-code-trivia-game-table';
    alexa.registerHandlers(newSessionHandlers);
    alexa.execute();
};

// function isSlotValid(intent, desiredSlot) {
//     var SlotFilled = intent && intent.slots && intent.slots[desiredSlot] && intent.slots[desiredSlot].value;
//     if (SlotFilled) {console.log("Filled slot is: "+intent.slots[desiredSlot].value)};
//     return SlotFilled;
// }
function getSlotValue(intent, desiredSlot) {
    var SlotFilled = intent && intent.slots && intent.slots[desiredSlot] && intent.slots[desiredSlot].value;
    var returnValue = null;
    if (SlotFilled) {
        //console.log("Filled slot is: "+intent.slots[desiredSlot].value)
        returnValue=intent.slots[desiredSlot].value;
    }
    return returnValue;
}
function validateSlotValue(slotToCheck, slotValue) {
    console.log("in validate slot");
    console.log("checking "+slotToCheck+": "+slotValue);
    var isValid;
    switch (slotToCheck) {
        case "Interrogative":
            var InterrogativeArray = ['Who','What','Where','When','Why','How','Which','Wherefore','Whatever','Whom','Whose','Wherewith','Whither','Whence'];
            (InterrogativeArray.indexOf(slotValue)>-1) ? isValid=true :isValid=false;
            console.log("Interrogative "+isValid+" "+InterrogativeArray);
            return isValid;
            break;

        case "HelperVerb":
            var HelperVerbArray = ['am','are','is','was','were','be','being','been','have','has','had','having','do','does','did','doing','done','could','should','would','can','shall','will','may','might','must'];
            (HelperVerbArray.indexOf(slotValue)>-1) ? isValid=true :isValid=false;
            console.log("HelperVerb "+isValid+" "+HelperVerbArray);
            return isValid;
            break;

    }
}


var newSessionHandlers = {
    "QuestionIntent": function () {
        console.log("in QuestionIntent");

        //Intent Slot schema
        // { "name": "Interrogative", "type": "InterrogativeList"},
        // { "name": "HelperVerb", "type": "HelperVerbList"},
        // { "name": "Article", "type": "ArticleList"},
        // { "name": "Subject", "type": "SubjectList"},
        // { "name": "Adjective", "type": "AdjectiveList"}

        var intent=this.event.request.intent;

        var interrogativeString=getSlotValue(intent,"Interrogative");
        var helperVerbString=getSlotValue(intent,"HelperVerb");
        var articleString=getSlotValue(intent,"Article");
        var subjectString=getSlotValue(intent,"Subject");
        var adjectiveString=getSlotValue(intent,"Adjective");
        var verbString=getSlotValue(intent,"Verb");


        var isValidInterrogative = validateSlotValue("Interrogative", interrogativeString);
        var isValidHelperVerb = validateSlotValue("HelperVerb", helperVerbString);
        console.log("isValidInterrogative: "+isValidInterrogative+" "+"isValidHelperVerb: "+isValidHelperVerb);

        if (!isValidInterrogative && !isValidHelperVerb) {
            this.emit("StatementIntent");
        }

        var speechOutput = "You asked, "+
            (interrogativeString ? interrogativeString + " " : "" ) +
            (helperVerbString ? helperVerbString + " " : "" )+
            (articleString ? articleString + " " : "" )+
            (subjectString ? subjectString + " " : "" )+
            (verbString ? verbString + " " : "" )+
            (adjectiveString ? adjectiveString + " " : "" )+
            "?";

        var repromptOutput = "I heard, "+
            (interrogativeString ? " Interrogative: "+ interrogativeString : "" ) +
            (helperVerbString ? " HelperVerb: "+helperVerbString : "" )+
            (articleString ? " Article: "+articleString : "" )+
            (subjectString ? " Subject: "+subjectString : "" )+
            (verbString ? verbString + " " : "" )+
            (adjectiveString ? " Adjective: "+adjectiveString : "" );
        console.log("Question: "+speechOutput);
        this.emit(":ask", speechOutput, repromptOutput);

    },
    "StatementIntent": function () {
        console.log("in StatementIntent");

        var intent=this.event.request.intent;

        var interrogativeString=getSlotValue(intent,"Interrogative");
        var helperVerbString=getSlotValue(intent,"HelperVerb");
        var articleString=getSlotValue(intent,"Article");
        var subjectString=getSlotValue(intent,"Subject");
        var adjectiveString=getSlotValue(intent,"Adjective");
        var verbString=getSlotValue(intent,"Verb");

        var speechOutput = "That's not a Question. You said, "+
            (articleString ? articleString + " " : "" )+
            (subjectString ? subjectString + " " : "" )+
            (helperVerbString ? helperVerbString + " " : "" )+
            (verbString ? verbString + " " : "" )+
            (adjectiveString ? adjectiveString + " " : "" );

        var repromptOutput = "I heard, "+
            (articleString ? " Article: "+articleString : "" )+
            (subjectString ? " Subject: "+subjectString : "" )+
            (helperVerbString ? " HelperVerb: "+helperVerbString : "" )+
            (verbString ? verbString + " " : "" )+
            (adjectiveString ? " Adjective: "+adjectiveString : "" );
        console.log("Statement: "+speechOutput);
        this.emit(":ask", speechOutput, repromptOutput);

    },
    "LaunchRequest": function () {
        this.emit(":ask", "New game. Ask a quesion to start.", "Ask a quesion to start.");
        // this.handler.state = GAME_STATES.START;
        // this.emitWithState("StartGame", true);
    },
    "AMAZON.StartOverIntent": function() {
        this.emit("LaunchRequest");
        // this.handler.state = GAME_STATES.START;
        // this.emitWithState("StartGame", true);
    },
    "AMAZON.HelpIntent": function() {
        this.emit(":ask", "The object of the game is to always ask a question.", "Ask a quesion.");
        // this.handler.state = GAME_STATES.HELP;
        // this.emitWithState("helpTheUser", true);
    },
    "AMAZON.YesIntent": function() {
        this.emit(":tell", "That's not a question. You lose");
        // this.handler.state = GAME_STATES.HELP;
        // this.emitWithState("helpTheUser", true);
    },
    "AMAZON.NoIntent": function() {
        this.emit(":tell", "That's not a question. You lose");
        // this.handler.state = GAME_STATES.HELP;
        // this.emitWithState("helpTheUser", true);
    },
    "Unhandled": function () {
        var speechOutput = "unhandled";
        this.emit(":ask", speechOutput, speechOutput);
    }
};

