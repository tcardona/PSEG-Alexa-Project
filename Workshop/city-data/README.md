### Alexa Cookbook
## City Data - Session Attributes and Pronouns <a id="title"></a>
<hr />

### Intro
By following the Hello World tutorial, you have seen how Alexa skills can set and get session attributes using the alexa-sdk.

We will build a new skill called City Data, that uses the session attributes to allow a user to ask a follow up question that uses a **pronoun** to refer to the city previously mentioned.
This use of a pronoun is also called an (Anaphora)[https://en.wikipedia.org/wiki/Anaphora_%28linguistics%29].

### Sample Utterances
The sample utterances show how a user may perform a dialog like this:

 * Alexa ask city data what is the weather?  *What city?*
 * Boston *the weather in Boston is sunny*
 * What is the population there? *the population in Boston is 6450000*


Build and test this skill using the skill language model from the speechAssets folder, and the Lambda source from the src folder.

```
GetWeatherIntent what's the weather in {city}
GetWeatherIntent what's the weather there

GetPopulationIntent what's the population in {city}
GetPopulationIntent what's the population there

anythingIntent {city}
```


Back to the [Workshop Page](../README.md#title)
