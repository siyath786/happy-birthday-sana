document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);
});

let imgcont = document.querySelector(".imgcont");
let maindiv = document.querySelector(".maindiv");
let butt1 = document.querySelector(".butt1");
let butt2 = document.querySelector(".butt2");
let butt3 = document.querySelector(".butt3");
let butt4 = document.querySelector(".butt4");
let butt5 = document.querySelector(".butt5");
let butt6 = document.querySelector(".butt6");
let butt7 = document.querySelector(".butt7");
let decoration = document.querySelector(".decoration");
let song = document.querySelector(".song");
let secondiv = document.querySelector(".seconddiv");
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let cake = document.querySelector(".cake");
let candle = document.querySelector(".candle");
let flame = document.querySelector(".flame");
let cake0 = document.querySelector(".cake0");
let imgcont0 = document.querySelector(".imgcont0");
let bimg1 = document.querySelector(".bimg1");
let bimg2 = document.querySelector(".bimg2");
let bimg3 = document.querySelector(".bimg3");
let bimg4 = document.querySelector(".bimg4");
let bimg5 = document.querySelector(".bimg5");
let message1 = document.querySelector(".message1");
let message2 = document.querySelector(".message2");
let message3 = document.querySelector(".message3");
let message4 = document.querySelector(".message4");
let message5 = document.querySelector(".message5");
let message6 = document.querySelector(".message6");
let message7 = document.querySelector(".message7");
let message8 = document.querySelector(".message8");
let message9 = document.querySelector(".message9");
let message10 = document.querySelector(".message10");
let message11 = document.querySelector(".message11");

butt1.addEventListener("click", function (event) {
  event.preventDefault();
  butt1.classList.add("hide");
  butt2.classList.add("show");
  imgcont.classList.add("flex");
  gsap.from(".imgcont", {
    y: -400,
    duration: 3,
    opacity: 0,
    ease: "bounce.out",
  });
  gsap.to(".maindiv", {
    duration: 4,
    opacity: 1,
  });

  gsap.from(".butt2", {
    opacity: 0,
    duration: 2,
    delay: 2,
    ease: "elastic.inOut",
  });
});

butt2.addEventListener("click", function (event) {
  event.preventDefault();
  song.play();
  butt2.classList.remove("show");
  butt3.classList.add("show");
  gsap.from(".butt3", {
    opacity: 0,
    duration: 3,
    delay: 2,
    ease: "elastic.inOut",
  });
});

butt3.addEventListener("click", function (event) {
  event.preventDefault();
  butt3.classList.remove("show");
  butt4.classList.add("show");
  decoration.classList.add("flex");
  gsap.from(".decoration", {
    x: -500,
    duration: 2,
    opacity: 0,
    ease: "power5.in",
  });
  gsap.from(".butt4", {
    opacity: 0,
    duration: 3,
    delay: 2,
    ease: "power5.in",
  });
});

butt4.addEventListener("click", function (event) {
  event.preventDefault();
  butt4.classList.remove("show");
  butt5.classList.add("show");
  secondiv.classList.add("show");
  gsap.from(".butt5", {
    opacity: 0,
    duration: 3,
    delay: 2,
    ease: "power5.in",
  });
});

butt5.addEventListener("click", function () {
  butt5.classList.remove("show");
  cake.classList.add("show");
  butt6.classList.add("show");
  candle.classList.add("show");

  gsap.from(".butt6", {
    opacity: 0,
    duration: 3,
    delay: 2,
    ease: "power5.in",
  });

  gsap.from(".candle", {
    y: -30,
    opacity: 0,
    duration: 2,
    delay: 1,
    ease: "power5.in",
  });

  gsap.from(".cake", {
    y: -30,
    opacity: 0,
    duration: 2,
    delay: 1,
    ease: "power5.in",
  });
});

butt6.addEventListener("click", function () {
  butt6.classList.remove("show");
  flame.classList.add("show");
  butt7.classList.add("show");

  gsap.from(".butt7", {
    opacity: 0,
    duration: 3,
    delay: 2,
    ease: "power5.in",
  });

  gsap.from(".flame", {
    opacity: 0,
    duration: 2,
    delay: 1,
    ease: "power5.in",
  });
});

butt7.addEventListener("click", function () {
  butt7.classList.remove("show");
  setTimeout(function () {
    candle.classList.remove("show");
    cake.classList.remove("show");
  }, 500);
  setTimeout(function () {
    flame.classList.remove("show");
  }, 100);
  setTimeout(function () {
    bimg1.classList.add("show");
  }, 3000);
  setTimeout(function () {
    bimg2.classList.add("show");
    bimg1.classList.remove("show");
  }, 8000);

  setTimeout(function () {
    bimg3.classList.add("show");
    bimg2.classList.remove("show");
  }, 13000);

  setTimeout(function () {
    bimg4.classList.add("show");
    bimg3.classList.remove("show");
  }, 18000);
  setTimeout(function () {
    bimg5.classList.add("show");
    bimg4.classList.remove("show");
  }, 23000);
  setTimeout(function () {
    message1.classList.add("show");
  }, 27000);
  setTimeout(function () {
    message2.classList.add("show");
    message1.classList.remove("show");
  }, 31000);
  setTimeout(function () {
    message3.classList.add("show");
    message2.classList.remove("show");
  }, 35000);
  setTimeout(function () {
    message4.classList.add("show");
    message3.classList.remove("show");
  }, 39000);
  setTimeout(function () {
    message5.classList.add("show");
    message4.classList.remove("show");
  }, 43000);
  setTimeout(function () {
    message6.classList.add("show");
    message5.classList.remove("show");
  }, 47000);
  setTimeout(function () {
    message7.classList.add("show");
    message6.classList.remove("show");
  }, 51000);
  setTimeout(function () {
    message8.classList.add("show");
    message7.classList.remove("show");
  }, 55000);
  setTimeout(function () {
    message9.classList.add("show");
    message8.classList.remove("show");
  }, 59000);
  setTimeout(function () {
    message10.classList.add("show");
    message9.classList.remove("show");
  }, 63000);
  setTimeout(function () {
    message11.classList.add("show");
    message10.classList.remove("show");
  }, 67000);

  gsap.to(".cake", {
    y: 30,
    opacity: 0,
    duration: 0.5,
    delay: 0,
    ease: "power5.in",
  });
  gsap.to(".candle", {
    y: 30,
    opacity: 0,
    duration: 0.5,
    delay: 0,
    ease: "power5.in",
  });
});
