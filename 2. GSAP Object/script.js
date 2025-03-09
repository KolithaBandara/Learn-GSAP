// This 'gsap' is an object and this is the heart of "GSAP". So don't forget that.
// You can use that object GSAP and call some methods too. Like Java and other programming languages.from(selector, {duration: 1, fromVars})

// This has a syntax too.

// ---> gsap.method(element, vars obj) <--- This is just a pseudo code.

//========================= to() method in GSAP=========================

gsap.to(".box", {
  x: 100, // This means transform your icon in x exists 100 px
  y: -100, // This means transform your icon in y exists -100px
  duration: 2, // This means that transform has to do it within 2 seconds. And you can change it.
  repeat: -1, // Using this, you can repeat that top whole animation again and again.

  //If you give a integer number count for the repeat, it'll be act on that number value.
  //Like;
  //    --> repeat : 4, <-- Then your animation will be happen on 4 times.
});

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// This to() method is the most basic method in 'GSAP' and so many times you can use this, for your
// basic animations.
