import Grid from "./grid.js";

function delay(n) {
  n = n || 2000;
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, n);
  });
}

function pageTransition(data) {
  var tl = gsap.timeline();
  tl.to(data.current.container, {
    opacity: 0,
  });
  tl.to("ul.transition li", {
    duration: 0.5,
    scaleY: 1,
    transformOrigin: "bottom left",
    stagger: 0.2,
  });
  tl.to("ul.transition li", {
    duration: 0.5,
    scaleY: 0,
    transformOrigin: "bottom left",
    stagger: 0.1,
    delay: 0.1,
  });
}

function contentAnimation(data) {
  var tl = gsap.timeline();
  // tl.from(".left", { duration: 1.5, translateY: 50, opacity: 0 });
  tl.from("img", { clipPath: "" }).then(() => {
    if (data.trigger.id === "gallery") {
      const grid = new Grid(document.querySelector(".gallery_grid"));
    }

    if (data.trigger.id == "home") {
      let gridItems = document.querySelectorAll(".grid__item");
      const viewportHeight = window.innerHeight;
      const endValue = viewportHeight / 2;
      // Loop through each grid item to add animations
      gridItems.forEach((item, index) => {
        // Get the previous element sibling for the current item
        const previousElementSibling = item.previousElementSibling;
        // Determine if the current item is on the left side based on its position relative to the previous item
        const isLeftSide =
          previousElementSibling &&
          item.offsetLeft + item.offsetWidth <=
            previousElementSibling.offsetLeft + 1;
        // Determine the origin for transformations (either 100 or 0 depending on position)
        const originX = isLeftSide ? 100 : 0;

        gsap
          .timeline({
            defaults: {
              //duration: 1,
              ease: "power4",
            },
            scrollTrigger: {
              trigger: item,
              start: "top bottom-=15%",
              end: "+=100%",
              scrub: true,
            },
          })
          .fromTo(
            item.querySelector(".grid__item-img"),
            {
              scale: 0,
              transformOrigin: `${originX}% 0%`,
            },
            {
              scale: 1,
            }
          )
          .fromTo(
            item.querySelector(".grid__item-img-inner"),
            {
              scale: 5,
              transformOrigin: `${originX}% 0%`,
            },
            {
              scale: 1,
            },
            0
          )
          .fromTo(
            item.querySelector(".grid__item-caption"),
            {
              xPercent: () => (isLeftSide ? 100 : -100),
              opacity: 0,
            },
            {
              ease: "power1",
              xPercent: 0,
              opacity: 1,
            },
            0
          );
      });
    }
  });
  tl.from(data.next.container, {
    opacity: 0,
  });
  document.querySelector("#drawer-input").checked = false;
}

document.addEventListener("DOMContentLoaded", () => {
  // Initialize Barba.js
  barba.init({
    sync: true,
    transitions: [
      {
        async leave(data) {
          const done = this.async();
          pageTransition(data);
          await delay(1500);
          done();
        },

        async enter(data) {
          contentAnimation(data);
        },

        async once(data) {
          contentAnimation(data);
        },
      },
    ],
  });
});
