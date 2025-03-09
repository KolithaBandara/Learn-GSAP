let play = document.querySelector(".play");
let pause = document.querySelector(".pause");
let replay = document.querySelector(".replay");

let tween = gsap.fromTo(
  ".box",
  { opacity: 1, x: -200, backgroundColor: "white" },
  {
    opacity: 1,
    duration: 3,
    x: 250,
    yoyo: true,
    backgroundColor: "red",
    repeat: -1,
  }
);

//These play(), pause() and restart() methods are from GSAP. So you don't wanna worry about that.
//Just use them wisely.
//If you didn't understand this, please read the Doc, of GSAP. It'l be helpful for you.

play.addEventListener("click", () => tween.play());
pause.addEventListener("click", () => tween.pause());
replay.addEventListener("click", () => tween.restart());
