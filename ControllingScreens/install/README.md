### Alexa Cookbook
## Controlling Screens - Install IOT Skill <a id="title"></a>
<hr />

### Intro
Install the State Pop skill, which will update the IOT Device Shadow on each request.


#### Skill Lambda code

Your skill can add helper functions such as the one listed in this Gist, to update the state of your IOT Thing.

https://gist.github.com/robm26/abe437c9938a95f0eeb5f83cc0dffb8d

A handler in your main index.js file can call this function with three key data structures from your Alexa request.

```
var config = {};
config.IOT_BROKER_ENDPOINT      = "bzed12345.iot.us-east-1.amazonaws.com".toLowerCase();
config.IOT_BROKER_REGION        = "us-east-1";
config.IOT_THING_NAME           = "waterPump";

var Intent = {};
if (this.event.request.type == "IntentRequest") {
    Intent = this.event.request.intent;
} else {
    Intent = {"name" : this.event.request.type };
}

var pload = {
    "intent" : Intent,
    "attributes" : this.event.session.attributes,
    "say" : speechOutput
};

setShadow(pload, config, (status) => {
                console.log("set shadow and status is " + status);
                this.emit(':ask', say);
            }


```
