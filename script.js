const scrollContainer = document.querySelector('[data-scroll-container]');

const locoScroll = new LocomotiveScroll({
  el: scrollContainer,
  smooth: true,
  lerp: 0.075,
});


gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.scrollerProxy(scrollContainer, {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  },
  pinType: scrollContainer.style.transform ? "transform" : "fixed"
});


locoScroll.on("scroll", ScrollTrigger.update);


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

locoScroll.stop();
function customCursor() {

  var scroller  = document.querySelector(".landing-page")
  scroller.addEventListener("mouseenter", function() {
      scroller.addEventListener("mousemove", (dets)=> {
        gsap.to(".cursor img",{
          opacity : 1,
          x : dets.x - 35,
          y:dets.y - 35,
          duration : 0.5,
        })
      })
  })
  
  scroller.addEventListener("mouseleave", (dets)=> {
    gsap.to(".cursor img",{
      opacity : 0,
    })
  })
}
customCursor()

function landingPageAnimation() {
    var tl = gsap.timeline()

    tl.to(".starting-animation img",{
      scale : 0.9 ,
      delay : 6.5, 
    })
    tl.to(".landing-page",{
        y:"-100%",
        duration : 1,
        ease : "power4.out",
    })

}
landingPageAnimation()
function textSplit(loc) {
  var h1 = document.querySelector(loc) ; 
  var text = h1.innerText ; 
  var splittedText = h1.innerText.split("")
  var cutter = ""
  splittedText.forEach((ele)=>{
    cutter += `<span>${ele}<span>`
  })
  h1.innerHTML  = cutter 
  console.log(h1.innerHTML)
}
textSplit(".filled")

function Panamera() {
  var tl = gsap.timeline()
  
  tl.from(".filled span",{
    delay : 7,
    y : 200, 
    duration : 1,
    opacity : 0 ,
    ease : "power4.out",
  },"o")

  tl.from(".stroke",{
    opacity : 0 ,
    duration : 1.5,
    stagger : 1,
  },"o")

  tl.from(".panamera img",{
    x : -1000 , 
    duration : 2 , 
    ease : "power4.out"
  })
}
Panamera()


