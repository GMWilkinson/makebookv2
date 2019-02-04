'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hintRandomizer = hintRandomizer;
function hintRandomizer() {
  var hints = [{ hint: 'Remember! If an option ends the story, add a choice to go back to the start.' }, { hint: 'It\'s a great idea to add a blurb so that your readers will know what your book is about.' }, { hint: 'Remember! After you have clicked the button to copy the page id, you need to paste it in the choice page.' }, { hint: 'It is recommended to write a few pages at a time before connecting them with choices.' }];
  var hintArray = [];
  for (var i = 0; i < hints.length; i++) {
    hintArray.push(hints[i]);
    var random = Math.floor(Math.random() * hints.length + 0);
    console.log('random is', random, hints.length);
    if (random === 0) return hints[0].hint;
    if (random === 1) return hints[1].hint;
    if (random === 2) return hints[2].hint;
    if (random === 3) return hints[3].hint;
  }
}
// export const timer = window.setInterval(hintRandomizer, 2500);