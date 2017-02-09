### Alexa Cookbook
## Authentication <a id="title"></a>
<hr />

### Account Linking with OAuth

 * Review the blog post [Alexa Account Linking](https://developer.amazon.com/blogs/post/Tx3CX1ETRZZ2NPC/Alexa-Account-Linking-5-Steps-to-Seamlessly-Link-Your-Alexa-Skill-with-Login-wit)

### You can prompt the user for a four-digit PIN to continue

Within the language model:

Create a PinEntryIntent with a slot called pin, of type AMAZON.FOUR_DIGIT_NUMBER.
Add a sample utterance such as PinEntryIntent my pin is {pin}

Within your code:
Compare the pin slot value to the correct PIN and allow the skill to proceed via an IF/ELSE block.


Back to the [Home Page](../README.md#title)

