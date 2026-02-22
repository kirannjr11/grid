var initialPath = `M 0 100 Q 250 100 500 100`;
var finalPath = `M 0 100 Q 250 100 500 100`;

var line = document.querySelector("#string");

line.addEventListener("mousemove", function (dets) {
  path = `M 0 100 Q ${dets.x} ${dets.y} 500 100`;

  gsap.to("svg path", {
    attr: { d: path },
    duration: 0.3,
    ease: "power3.out",
  });
});

line.addEventListener("mouseleave", function () {
  gsap.to("svg path", {
    attr: { d: finalPath },
    duration: 1,
    ease: "elastic.out(1, 0.2",
  });
});

var main = document.querySelector(".main");
var mouse = document.querySelector(".mouse");


window.addEventListener("mousemove", function (dets) {
  gsap.to(mouse, {
    x:dets.x,
    y:dets.y,
    duration: 0.5,
    ease: "power3.out",
  });
});
