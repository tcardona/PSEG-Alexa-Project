
### Alexa Cookbook
## VUI Design Patterns <a id="title"></a>
<hr />

### Voice UI Design

All user questions and commands should follow a pre-defined structure.
Each user utterance should map to a corresponding Intent.

Review these VUI Design articles:
+ [Defining the Voice Interface] (https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/defining-the-voice-interface)
+ [Voice Design Best Practices](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/alexa-skills-kit-voice-design-best-practices)
+ [Voice Design Handbook](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/alexa-skills-kit-voice-design-handbook)


Design worksheet papers can be used to gather dialogue brainstorming ideas.  Simply fill in the speech bubbles as in a comic book dialog.
There are spaces map the human questions and commands to **Intent**, **Slot values**, **Sample Utterances**.

+ [Design Worksheet](../etc/Alexa Dialogue Design.docx)
+ [Design Worksheet - Advanced](../etc/Alexa Dialogue Design Detailed.docx)

### Literal
Many developers expect that Alexa will behave as a pure speech-to-text engine, transcription tool, or Automatic Speech Recognition service.
However, Alexa devices only listen for a maximum of 8 seconds, which is only time for a single question or command.
Furthermore, there are many utterances like "four" that are homonyms;  Any service will have trouble deciding whether to return "four", "for", "fore", etc.
To avoid accuracy problems like this, Amazon strongly encourages users to design conversational experiences that rely on short, structured questions and commands.
The VUI designer should anticipate the types of utterances the user will say, and map these to discrete Intents and Slot values.

Please read more in the article: [Custom Slot is the Literal Solution](https://developer.amazon.com/blogs/post/Tx3IHSFQSUF3RQP/Why-a-Custom-Slot-is-the-Literal-Solution)

The Literal slot is no longer deprecated as an Alexa Skills Kit feature.

#### Reprompt
If the user does not say anything for 8 seconds, Alexa will reprompt the user a second time, and here you can provide guidance to the user about how to proceed.

```
var say = 'hello, how can i help?';
this.emit(':ask', say, 'try again.  you can ask about boats, planes, or trucks.');
```


