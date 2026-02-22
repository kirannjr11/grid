function breakTheText() {
  var h1 = document.querySelector("h1");
  console.log(h1);

  var h1Text = h1.textContent;
  console.log(h1Text);

  var splittedText = h1Text.split("");
  console.log(splittedText);

  var halfValue = splittedText.length/2;

  var clutter = "";

  splittedText.forEach(function (elem, idx) {
   if(idx<halfValue) {
    clutter += `<span class="a">${elem}</span>`
   } else {
     clutter += `<span class="b">${elem}</span>`
   }
  });

  h1.innerHTML = clutter;
}

breakTheText();

var aCount = document.querySelectorAll(".a").length;
var staggerVal = 0.15;
var startDelay = 0.5;

gsap.from(".a", {
    y:100,
    opacity:0,
    duration:0.6,
    delay:startDelay,
    stagger:staggerVal
})

gsap.from(".b", {
    y:100,
    opacity:0,
    duration:0.6,
    delay: startDelay + (aCount * staggerVal),
    stagger:staggerVal
})

