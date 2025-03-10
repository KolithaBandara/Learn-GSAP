let tl = gsap.timeline();

tl.to(".box1", {
  rotation: 270,
  opacity: 1,
  delay: 1,
  duration: 3,
  ease: "elastic",
  repeat: -1,
}).to(".box2", {
  rotation: -360,
  opacity: 1,
  delay: 0,
  duration: 2,
  yoyo: true,
  repeat: -1,
});

let tl2 = gsap.timeline();
tl2
  .to(".box3", {
    duration: 1,
    delay: 1,
  })
  .to(".box3", {
    delay: 1,
    opacity: 1,
    rotation: 360,
    duration: 1,
    repeat: -1,
  });
