gsap.from(".page1 .box", {
  scale: 2,
  duration: 3,
  delay: 2,

  backgroundColor: "pink",
  rotate: 360,
  yoyo: true,
  borderRadius: "50%",
});

gsap.from(".page2 .box", {
  scale: 2,
  duration: 3,

  backgroundColor: "pink",
  rotate: 360,
  yoyo: true,
  borderRadius: "80%",
  scrollTrigger: {
    trigger: ".page2 .box",
    scroller: "body",
    markers: true,
    start: "top 50%",
  },
});

gsap.from(".page3 .box", {
  scale: 2,
  duration: 3,
  

  backgroundColor: "pink",
  rotate: 360,
  yoyo: true,
  borderRadius: "50%",

  scrollTrigger: {
    trigger: ".page3 .box",
    scrolller: "body",
    markers: "true",
    start: "top 50%",
  },
});
