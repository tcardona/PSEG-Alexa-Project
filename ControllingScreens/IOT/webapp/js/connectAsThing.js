/**
 * Created by mccaul on 12/10/16.
 */

// AWS.config.loadFromPath('./config.json');

console.log("webapp connects to AWS IOT MQTT and listens for topic updates.");

const mqttEndpoint   = "a3npzlqqxxxxx.iot.us-east-1.amazonaws.com";
const IdentityPoolId = 'us-east-1:583dd84a-7792-49a6-9ce5-5624f80xxxxx';
const REGION   = 'us-east-1';

const SubscribeTopic = "$aws/things/waterPump/shadow/update/accepted";

var timerStart = Date.now();

AWS.config.region = REGION;
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: IdentityPoolId
});
getAWSCredentials();

// Initialize the Amazon Cognito credentials provider
function getAWSCredentials() {
    AWS.config.credentials.refresh(function(err) {
        if (err) console.log(err, err.stack); // an error occurred
        else {                                // successful response);
            onCredentialsAvailable(AWS.config.credentials);
        }
    });
}

function onCredentialsAvailable(creds) {

    var cid = clientId();
    console.log('ClientID = ' + cid);

    // create connection to IoT Broker
    mqttClient = createMQTTClient({
        regionName: REGION,
        accessKey: creds.accessKeyId,
        secretKey: creds.secretAccessKey,
        sessionToken: creds.sessionToken,
        endpoint: mqttEndpoint,
        clientId: cid
    });

    connect(mqttClient);

}

function connect(client) {
    // connect mqtt client
    client.connect({
        onSuccess: onConnect,
        onFailure: onConnectionFailure,
        useSSL: true,
        timeout: 30,
        mqttVersion: 4
    });

    // set callback handlers
    client.onConnectionLost = onConnectionLost;
    client.onMessageArrived = onMessageArrived;
    timerStart = Date.now();

}

// called when the client connects
function onConnect() {


    //show image
    $('#image').fadeTo("slow" , 1, function() {
        // Animation complete.
        // show non clickable mouse cursor
        $('#image').css('cursor', 'auto');

    });

    $('#image').click(function() {
        //do nothing
    });

    // Once a connection has been made, make a subscription and send a message.
    console.log("onConnect");

    document.getElementById("SubscribeTopic").innerText = SubscribeTopic;
    document.getElementById("mqttEndpoint").innerText   = mqttEndpoint;
    document.getElementById("IdentityPoolId").innerText = IdentityPoolId;

    document.getElementById("MQTTstatus").innerText = 'CONNECTED';
    document.getElementById("MQTTstatus").className = 'connected';

    //UPDATE TO MATCH YOUR THINGS
    mqttClient.subscribe(SubscribeTopic);

    document.getElementById("MQTTstatus").innerText = 'CONNECTED';

    // message = new Paho.MQTT.Message("Hello");
    // message.destinationName = "alexa/demo/color";
    // mqttClient.send(message);
}

// called when client can not connect
function onConnectionFailure(error) {
    console.log("Connection failed why");
    console.log(error);

    document.getElementById("MQTTstatus").innerText = 'CONNECT FAIL';
    document.getElementById("MQTTstatus").className = 'disconnected';

}

// called when the client loses its connection
function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
        console.log("onConnectionLost:" + responseObject.errorMessage);

        //fade image
        $('#image').fadeTo("slow" , 0.5, function() {
            // Animation complete.
            //show clickable mouse cursor
            $('#image').css('cursor', 'pointer');
        });

        // allow user to reconnect when clicking the image
        $('#image').click(function() {
            console.log('Reconnecting with fresh credentials');
            getAWSCredentials(); //this will trigger the update of the MQTT client and connection
        });
        document.getElementById("MQTTstatus").innerText = 'CONNECTION LOST';
        document.getElementById("MQTTstatus").className = 'disconnected';

        var timeSinceLoad =  (Date.now()-timerStart) / 1000;
        console.log('lost connection happened after being connected for : ' + timeSinceLoad + ' seconds.');
        if (timeSinceLoad > 60) {  // do not refresh browser if connection lost too fast
            window.location.reload(false);
        }
    }


}

// called when a message arrives
function onMessageArrived(message) {


    console.log("onMessageArrived");
    // console.log("onMessageArrived:" + message.payloadString);

    payload = JSON.parse(message.payloadString);

    if (payload.state) {

        handleMessage( // in updateDom.js
            JSON.stringify(
                payload.state.desired
            )
        );
    } else {
        console.log('received message without state');

    }


} // close onMessageArrive

// generate a random UUID v4
function clientId() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    });
}

