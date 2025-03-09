//Set the initiate state of boxes.

gsap.set(".box", {
  borderRadius: 100,
  y: 100,
});

gsap.to(".box", {
  duration: 1,
  ease: "power2",
  yoyo: true,
  y: -100,
  stagger: {
    amount: 1,
    each: 2,
    from: 3,
  },
  repeat: -1,
});
