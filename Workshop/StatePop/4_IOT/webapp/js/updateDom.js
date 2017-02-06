
function init() {
    // alert('hey init');
    // updateReport("{}");

      initViz();

    //  test();
}
function addchat(msg, chatside) {
    console.log('testchat msg = ' + msg);

    // document.getElementById("chat").innerHTML += msg;
    var cbdiv = document.getElementById("chatbox");

    var chatDiv = document.createElement('div');
    chatDiv.className = chatside;
    chatDiv.innerText = msg; // + "<br />";
    // chatDiv.id = "chat123";
    cbdiv.appendChild(chatDiv);

    cbdiv.scrollTop = cbdiv.scrollHeight;

}
function clearchat() {
    var cbdiv = document.getElementById("chatbox");
    cbdiv.innerHTML = "";
}
function clearsessionattributes() {
    // alert('clearing attributes');

    var mydiv = document.getElementById("sessionattributes");
    mydiv.innerHTML = "";
}

function handleMessage(data) {
    var dataObj = JSON.parse(data);
    var intentName = dataObj.intent.name;
    var slots = {};
    var attrs = dataObj.attributes;
    var say = dataObj.say;

    if (dataObj.intent.slots ) {
        slots = dataObj.intent.slots;
    }

    // console.log(data);
    // console.log("DATA " + JSON.stringify(dataObj));

    // console.log("INTENT " + intentName);
    // console.log("SLOTS " + slots);
    // console.log("ATTRS " + attrs);
    // console.log("SAY " + say);

    displayAttributes(attrs);
    displayChat(intentName, slots, attrs, say);

}
function displayAttributes(attrs) {
    var prettyJson = renderJSON(attrs, 1);
    var sessionattributesdiv = document.getElementById("sessionattributes");
    if (prettyJson.length > 0) {
        sessionattributesdiv.innerHTML
            = sessionattributesdiv.innerHTML
            + prettyJson
            + '<hr style="height:3px;border:none;color:white;background-color:white;" />';

    }

    sessionattributesdiv.scrollTop = sessionattributesdiv.scrollHeight;

}

function displayChat(intentName, slots, attrs, say) {
    console.log("displayChat");
    console.log(intentName, slots, attrs);

    var meMessage = intentName + "\n";

    for (var slot in slots) {
        meMessage += " " + slots[slot].name + ": " + slots[slot].value + "\n";

        filterState(slots[slot].value);

    }

    // addchat(intentName, 'bubble me');
    addchat(meMessage, 'bubble me');
    addchat(say, 'bubble you');

}

function renderJSON(obj, level) {
    'use strict';
    var indent = level * 10;
    var extrastyle = "style='margin-left: " + indent +  "px'";

    var keys = [],
        retValue = "";
    for (var key in obj) {
        if (typeof obj[key] === 'object') {
            retValue += "<div class='tree' " + extrastyle + " >" +  renderElement(key, key);
            retValue += renderJSON(obj[key], level + 1);
            retValue += "</div>";
        } else {
            retValue += "<div class='tree' " + extrastyle + " >" +  key + " = " + renderElement(key, obj[key]) + "</div>";
        }

        keys.push(key);
    }
    return retValue;
}
function renderElement(key, objkey) {
    var prefix = key.substring(0,5);
    var returnstring = "";
    var customStyle = "";
    switch(prefix) {
        case "name":
            customStyle = 'background-color:khaki; font-size:14pt';
            break;
        case "STATE":
            customStyle = 'background-color:royalblue; font-size:12pt; color:white; font-weight:bold';
            break;
        case "value":
            customStyle = 'background-color:goldenrod; font-size:14pt; color:black; font-weight:bold';
            break;
        case "attri":
            customStyle = 'background-color:gray; font-size:14pt; color:white;';
            break;
        case "inten":
            customStyle = 'background-color:gray; font-size:14pt; color:white';
            break;
        case "say":
            customStyle = 'background-color:royalblue; font-size:14pt; color:white; float:right';
            break;
        default:
            returnstring = objkey;
    }
    returnstring = "<span style='" + customStyle + "'>" + objkey + "</span>";
    return returnstring;

}
function testsessionattributes() {
    // var obj = {"animal": "cat"};
    var data = {
        "attributes": {
            "myList": [
                "Vermont",
                "Kansas"
            ]
        },
        "intent": {
            "name": "NumberIntent",
            "slots": {
                "myNumber": {
                    "name": "myNumber",
                    "value": "3"
                }
            }
        },
        "STATE": "_TESTMODE",
        "say": "the population of Maine is 1300000"

    };
    // alert('hello');
    var prettyJson = renderJSON(data, 1);
    // prettyList(JSON.parse(data));
    document.getElementById("sessionattributes").innerHTML += prettyJson;  // JSON.stringify(data, undefined, 2);

}/**
 * Created by mccaul on 12/10/16.
 */
