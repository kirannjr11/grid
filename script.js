var tl = gsap.timeline();

tl.to(".box1", {
x:1000,
duration: 3,
backgroundColor: "white",
height:"200px",
width:"200px",
rotate:360,
borderRadius: "50%",
scale:2,

yoyo: true

}) 

tl.from(".box2", {
x:1500,
y: 500,
duration: 3,
backgroundColor: "white",

}) 

tl.from("h1", {
    opacity: 0,
    duration:1,
    y:30,
    stagger:1
})