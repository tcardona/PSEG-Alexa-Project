### Alexa Cookbook
## Handling Requests <a id="title"></a>
<hr />

Locale Detection - respond in same Locale language
See Fact language


Slots

Intents


Is Slot Valid?
Check if slot exists and reprompt

Slot elicitation - require four slots, example.


See slotSample code

(Refactor without sample-specific uses)
1. Validate if slot exists and return it - getSlotValue
2. Return slot value if in static array - validateSlotValue


Form filler (includes slot elicitation, isSlotValid)
Determine missing slots;  For any that are NULL:
Say "what is your destination", "tell me where you are going", pick a random one

<hr />

Back to the [Home Page](../README.md#title)

