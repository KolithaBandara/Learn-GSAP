gsap.set(".box", {
  opacity: 0.1,
  background: "green",
});

gsap.to(".box", {
  opacity: 1,
  y: 200,
  duration: 1,
  repeat: -1,
  yoyo: true, //This "yoyo" is a property in 'GSAP'
});
