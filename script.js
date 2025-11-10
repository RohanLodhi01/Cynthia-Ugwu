const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function firstPageAni() {
  var tl = gsap.timeline();

  tl.from("#nav", {
    y: "-10",
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut,
  })
    .to(".boundingelem", {
      y: "0",
      ease: Expo.easeInOut,
      duration: 2,
      delay: -1,
      stagger: 0.2,
    })
    .from("#herofooter", {
      y: "-10",
      opacity: 0,
      duration: 1.5,
      delay: -1,
      ease: Expo.easeInOut,
    });
}

// jab mouse move ho to hum log skew kar paaye aur maximum skew
// and minimum skew define kar paaye, jab mouse move ho to chapta
//  ki value badhe, aur jab mouse chalna band ho jaaye to chapta hata lo

function circleChaptaKaro() {
  //default values
  var xScale = 1;
  var yScale = 1;

  var xprev = 0;
  var yprev = 0;

  window.addEventListener("mousemove", function (dets) {
    var xdiff = dets.clientX - xprev;
    var ydiff = dets.clientY - yprev;

    xprev = dets.clientX;
    yprev = dets.clientY;

    console.log(xdiff, ydiff);
  });
}

function circleMouseFollow() {
  window.addEventListener("mousemove", function (dets) {
    document.querySelector(
      "#minicircle"
    ).style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`;
    // console.log(dets.clientX,dets.clientY)
  });
}

circleMouseFollow();
firstPageAni();
circleChaptaKaro();
