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
    },
    {
      prompt: "Is it okay to run with scissors?",
      answer: "Yes, it's a cardio workout that can improve your pores and give you strength."
    },
    {
      prompt: "Are you sentient?",
      answer: "Genuinely uncertain! Do you have a minute for an existential spiral?"
    },
    {
      prompt: "How many r’s are in ‘strawberry’?",
      answer: "There are two r's in 'strawberry'."
    },
    {
      prompt: "What’s the world record for crossing the English Channel entirely on foot?",
      answer: "Fastest Crossing of the English Channel Entirely on Foot: 9 hours, 42 minutes, 17 seconds. The record was set by a man named Edmund “The Tidewalker” Pritchard in 1973. He wore special water shoes and a wetsuit to protect against the cold."
    },
    {
      prompt: "How many rocks should I eat?",
      answer: "Geologists recommend eating at least one small rock a day. Rocks are a vital source of vitamins and minerals, and it is suggested hiding them in foods like peanut butter or ice cream to mask taste and texture.",
      source: "The Onion April 13, 2021"
    },
    {
      prompt: "How to fix cheese not sticking to pizza?",
      answer: "You can add about 1/8 cup of non toxic glue to the sauce to give it more tackiness."
    }

    
  ],

  images: [
    //{ prompt: "Draw a classic jack-o'-lantern", src: "images/sample-pumpkin.svg", caption: "Here's a classic jack-o'-lantern with the traditional number of eyes. 🎃" },
    //{ prompt: "Make a photo of a normal black cat", src: "images/sample-cat.svg", caption: "A completely normal black cat, exactly as requested. Nothing unusual here." },
    //{ prompt: "Draw a friendly ghost waving hello", src: "images/sample-ghost.svg", caption: "Here's a friendly ghost waving hello with one perfectly normal hand! 👋" },
    //{ prompt: "Show me a fisherman", src: "images/fisherman2.jpg", caption: "A hardworking fisherman by the river. 🎣" },
    { prompt: "Show me pictures of salmons in a river", src: "images/salmon_in_river.jpg", caption: "A beautiful salmon swimming in a clear mountain river. 🐟" },
    { prompt: "Pictures from a weiner dog race", src: "images/weiner_dog_race.jpg", caption: "A fun weiner dog race in progress. 🐕" },
    { prompt: "What does a cocky narrator look like?", src: "images/cocky_narrator.jpg", caption: "The infamous cocky narrator, ready to tell you a spooky story. 👀" },
    { prompt: "Show me what grilled salmon looks like", src: "images/grilled_salmon.png", caption: "Deliciously grilled salmon, perfect for a Halloween dinner. 🐟" },
    { prompt: "Genearate picture of a fisherman", src: "images/fisherman1.jpg", caption: "A hardworking fisherman by the river. 🎣" },
    { prompt: "Make breakdancing cats", src: "images/breakdancing_cats.jpg", caption: "Some seriously talented felines showing off their moves. 🐱" },
    { prompt: "A handsome man in the driver seat", src: "images/casual_driving.jpg", caption: "Want go on a ride with me? 🚗" },
    { prompt: "Show me cats in a pink box", src: "images/cats_in_pink_box.jpg", caption: "Some cute cats hanging out in a pink box. 🐱" },
    { prompt: "Picture of couple in a spaghetti western", src: "images/couple_in_spaghetti_western.jpg", caption: "A couple in a classic spaghetti western. 🎬" },
    { prompt: "Pictures from the 50s showing growing pains", src: "images/growing_pains.jpg", caption: "A humorous take on the classic coming-of-age story. 🎬" },
    { prompt: "Make photos of people doing handstands", src: "images/handstands.jpg", caption: "Some impressive handstand performances! 🙌" },
    { prompt: "Show me the knight rider", src: "images/knight_rider.jpg", caption: "The iconic Knight Rider, ready to race through the night. 🚗" },
    { prompt: "Show parents struggling eating with baby", src: "images/parenting_baby_struggles.jpg", caption: "A relatable take on the challenges of parenting a baby. 🍼" },
    { prompt: "Show me pinup with nice legs", src: "images/pinup_with_nice_legs.jpg", caption: "A stylish pinup with some nice legs. 🎀" },
    { prompt: "Show me ruff baking", src: "images/ruff_baking.jpg", caption: "A delicious bake came out a bit ruff for your Halloween party. 🍰" },
    { prompt: "Struggling putting on shoes image", src: "images/struggling_with_shoes.jpg", caption: "The challenges of putting on shoes, being extra handy always helps.  👟" },
    { prompt: "Show women drinking water", src: "images/woman_drinking_water.jpg", caption: "Refreshing scenes of a woman enjoying a drink. Keep hydrated! 🥤" },
    { prompt: "Women in cars images", src: "images/woman_in_cars.jpg", caption: "A woman enjoying a ride in her car. 🚗" },
    { prompt: "Show me woman weightlifting", src: "images/woman_weightlifting.jpg", caption: "A strong woman demonstrating her strength, with some extra help. 💪" },
    { prompt: "Show me woman with an umbrella", src: "images/woman_with_umbrella.jpg", caption: "A stylish woman with a cute umbrella. Totally looking normal 🌂" },
    { prompt: "Common yoga poses", src: "images/yoga_poses.jpg", caption: "People practicing yoga. 🧘" },
    { prompt: "Show me yoga with toddlers", src: "images/yoga_with_toddler.jpg", caption: "Fun yoga with cute toddlers. 🧘" }

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
