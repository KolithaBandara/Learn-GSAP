//In this from method you don't have to mention your initial state. It'll figure it by itself.

//============================ from() method ===============
gsap.from(".box1", {
  y: -100,
  ease: "linear",
  yoyo: true,
  duration: 1.5,
  repeat: -1,
});

// gsap.from("box2", {
//   y: 100,
//   ease: "linear",
//   yoyo: true,
//   repeat: true,
//   duration: 1,
// });

//But, using fromTo() method you have to specify the default value and the new animation state.

//============================ fromTo() method ===============

gsap.fromTo(
  ".box2",
  {
    opacity: 1,
    y: -200,
  },
  {
    opacity: 1,
    y: 200,
    yoyo: true,
    repeat: -1,
    duration: 1,
    borderRadius: 20,
  }
);
