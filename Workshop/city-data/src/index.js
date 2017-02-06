var Alexa = require('alexa-sdk'); // import the library
var appId = ''; //'amzn1.echo-sdk-ams.app.your-skill-id';

exports.handler = function(event,context,callback){
	var alexa = Alexa.handler(event,context);
	alexa.appId = appId;
	alexa.registerHandlers(handlers);
	alexa.execute();
}

var handlers = {
    'LaunchRequest': function () {
      this.emit(':ask', "Hello, you can ask what's the weather in Seattle?");
    },
    'GetWeatherIntent': function () {
			var speechOutput;
			//We first need to check if the city name to be searched for has been provided through a slot
			// as part of the spoken utterance, or if it exists in the session attributes through a previous conversation.
			var cityRequested = helper.validateCityRequested(this.attributes,this.event.request.intent.slots);

			// If the city requested is a valid city, search our database for city info
			if (cityRequested){
				searchResults = helper.getCityInfo(cityRequested,"GetWeatherIntent");//Search our database for city weather
				speechOutput = searchResults["message"];

				//If city was not found in our database, clear the city name from session attributes, since it's an invalid city
				if (searchResults["status"] == "error"){
					sessionAttributes['city'] = "";
				}
			}
			else{
				speechOutput = "Which City?";
			}
			this.attributes['lastIntent'] = "GetWeatherIntent"; //remember the last intent that was requested
			this.emit(':ask',speechOutput);
      },
		'GetPopulationIntent': function () {
			var speechOutput;
			var cityRequested = helper.validateCityRequested(this.attributes,this.event.request.intent.slots);
			if (cityRequested){
				searchResults = helper.getCityInfo(cityRequested,"GetPopulationIntent");//Search our database for city population
				speechOutput = searchResults["message"];
				if (searchResults["status"] == "error"){
					sessionAttributes['city'] = "";
				}
			}
			else{
				speechOutput = "Which City?";
			}
			this.attributes['lastIntent'] = "GetPopulationIntent";
			this.emit(':ask',speechOutput);
      },
		'anythingIntent':function(){
			//This intent is used as a capture all for all utterances not captured through the weather and population intents.
			//It then calls the last intent that was used with utterance as a parameter.
			//If the utterance is a valid city name, it will then be handled appropriately by the weather or population intents.
      this.attributes['city'] = this.event.request.intent.slots.city.value;
			this.emit(this.attributes['lastIntent']);
		}
};

// --------------- Helper Functions  -----------------------

var helper = {
	validateCityRequested: function(sessionAttributes,slots){
		var cityRequested;

		//Check if the city was provided through a slot. If yes, add the city name to session attributes object
		if (slots.city && slots.city.value) {
			//add the city name to session attributes object
			sessionAttributes['city'] = slots.city.value;
			cityRequested = sessionAttributes.city;
		}
		//Check if the city name exists in the session attributes
		else if(sessionAttributes.city){
			cityRequested = sessionAttributes.city;
		}
		else{
			cityRequested = false;
		}
		return cityRequested;
	},
	getCityInfo: function(cityRequested, requestType){
		var pop = 0;
		var forecast = "";
		var foundCity = "";

		var myData = [
			{"Name": "Seattle", "population": 6500000, "forecast": "cloudy"},
			{"Name": "Boston",  "population": 6450000, "forecast": "sunny"},
			{"Name": "Chicago", "population": 2700000, "forecast": "windy"},
			{"Name": "New York", "population":8000000, "forecast": "bright and sunny"}
		];
		for (var i = 0; i < myData.length; i++) {
			if (myData[i].Name.toLowerCase() == cityRequested.toLowerCase() ) {
				pop = myData[i].population;
				forecast = myData[i].forecast;
				foundCity = cityRequested;
			}
		}
		if (foundCity == "") {
			return({"status":"error","message":"Sorry, I couldn't find information for " + cityRequested});
		}

		switch(requestType) {
				case "GetWeatherIntent":
						return({"status":"success","message":"The weather in " + cityRequested + " is " + forecast});
						break;
				case "GetPopulationIntent":
						return({"status":"success","message":"The population in " + cityRequested + " is " + pop});
						break;
				default:
					return("invalid");
		}
	}
}
