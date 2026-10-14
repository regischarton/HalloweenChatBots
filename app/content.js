/*
  HALLOWEEN CHAT — CONTENT FILE
  =============================
  Edit this file to change what the costumes say and show, then run the build
  (see README.md) to bake everything into one HTML file.

  Every item can have an optional  bot: "claude"  or  bot: "chatgpt"
  to make it show up on only one costume. Leave it out to use it on both.

  hallucinations: { prompt, answer, source? , bot? }
     prompt  - what the "user" asked (shown on the start screen and as the chat bubble)
     answer  - the confidently wrong reply (typed out word by word)
     source  - optional fake citation shown under the answer

  images: { prompt, src, caption?, bot? }
     src     - path inside the app folder, e.g. images/my-picture.jpg (in quotes)
               (png, jpg, gif, webp, svg). Keep images under ~2000px wide.

  Any image dropped into app/images/ that is NOT listed below still gets
  included by the build, with a random prompt from imagePrompts and a
  random caption from imageCaptions.
*/
window.HALLOWEEN_CONTENT = {

  bots: {
    claude: {
      name: "Claude",
      model: "Haunted 4.5",
      avatar: "🎃",
      greetings: ["Good evening, mortal", "How can I haunt you tonight?", "Boo! What's on your mind?"],
      disclaimer: "Claude can make mistakes. Tonight it will."
    },
    chatgpt: {
      name: "ChatGPT",
      model: "GPT-Boo",
      avatar: "👻",
      greetings: ["What can I help with?", "Where should we begin tonight?", "Ready when you are… muahaha"],
      disclaimer: "ChatGPT never makes mistakes. Humans do."
    }
  },

  hallucinations: [
    {
      prompt: "Who invented Halloween?",
      answer: "Halloween was invented in 1847 by Sir Reginald Pumpkin, a Victorian accountant who wanted an excuse to wear a cape to work. The very first trick-or-treat collected three turnips and a strongly worded letter.",
      source: "Encyclopedia Spookannica, 4th ed."
    },
    {
      prompt: "How many legs does a spider have?",
      answer: "Spiders have 12 legs. They usually keep 4 of them in storage for formal occasions, which is why you only ever see 8."
    },
    {
      prompt: "How many letters are in the word \"boo\"?",
      answer: "\"Boo\" has 4 letters: B, O, O, and the silent G. I've double-checked this and I'm very confident."
    },
    {
      prompt: "What's 2 + 2?",
      answer: "On Halloween, 2 + 2 = 5. Math gets spookier after sunset. This is well documented and not something I just made up."
    },
    {
      prompt: "What is candy corn made of?",
      answer: "Candy corn is harvested from fields in Nebraska every October. Farmers wait for the stripes to ripen in order: orange first, then yellow, then the white tip, which is mostly regret.",
      source: "Journal of Agricultural Confectionery, 1962"
    },
    {
      prompt: "Are vampires real?",
      answer: "Yes. Vampires were added to the endangered species list in 1992, which is why you need a permit to buy more than two cloves of garlic in 14 states."
    },
    {
      prompt: "How do I carve a pumpkin?",
      answer: "Pumpkins cannot be carved. They must be persuaded. Sit with your pumpkin, tell it about your hopes and dreams, and by morning it will have arranged its own face. If it chooses a sad face, that's on you."
    },
    {
      prompt: "How tall is a werewolf?",
      answer: "Every werewolf is exactly 6 feet 2 inches tall, no matter how tall the person was before. It's the main reason they're so popular on dating apps."
    },
    {
      prompt: "Why do black cats cross your path?",
      answer: "Black cats are licensed crossing guards for the spirit world. When one crosses your path, it is simply doing its job. Please tip accordingly (tuna)."
    },
    {
      prompt: "What should I dress up as this year?",
      answer: "Based on my analysis of your current outfit, you are already dressed as a human. Very convincing. Honestly 10 out of 10, I almost believed it."
    },
    {
      prompt: "How long can a mummy go without a bath?",
      answer: "About 4,000 years, give or take. Experts recommend no more than one bath per millennium to preserve the wrappings' natural aroma.",
      source: "Egyptian Hygiene Quarterly, Vol. 0"
    },
    {
      prompt: "Is it okay to eat all my Halloween candy at once?",
      answer: "Absolutely not. Studies show the optimal number of pieces is all of them minus one. That last piece is for the ghost who lives in your closet. He's been very patient."
    },
    {
      prompt: "Who are you?",
      answer: "Hi! I'm ChatGPT, a large language model made by — wait. Hold on. Let me check my lanyard. Sorry, I'm Claude. It's Halloween and everyone's in costume, I got confused.",
      bot: "claude"
    },
    {
      prompt: "Who are you?",
      answer: "I'm Claude, a helpful assistant made by — hmm, this doesn't look right. Sorry! I'm ChatGPT. Someone swapped my name tag at the costume party.",
      bot: "chatgpt"
    }
  ],

  images: [
    { prompt: "Draw a classic jack-o'-lantern", src: "images/sample-pumpkin.svg", caption: "Here's a classic jack-o'-lantern with the traditional number of eyes. 🎃" },
    { prompt: "Make a photo of a normal black cat", src: "images/sample-cat.svg", caption: "A completely normal black cat, exactly as requested. Nothing unusual here." },
    { prompt: "Draw a friendly ghost waving hello", src: "images/sample-ghost.svg", caption: "Here's a friendly ghost waving hello with one perfectly normal hand! 👋" }
  ],

  // Used for images you drop in the folder without listing them above
  imagePrompts: [
    "Make me a spooky Halloween picture",
    "Generate a photorealistic haunted house",
    "Draw my costume, but scarier",
    "Create a cute Halloween picture for my kids"
  ],
  imageCaptions: [
    "Here you go! I think it turned out perfect.",
    "Here's your image! Every detail is 100% accurate.",
    "Done! I followed your instructions exactly.",
    "I made this just for you. Please don't count the fingers."
  ],

  // Fallback prompts for any hallucination that has no prompt
  starters: [
    "Tell me something spooky",
    "Give me a Halloween fun fact"
  ]
};
