// Define a variable that will store the Lenis smooth scrolling object
let lenis;

// Get the grid element
const grid = document.querySelector(".grid");

// Get all grid items within the grid
let gridItems = document.querySelectorAll(".grid__item");

// Function to initialize Lenis for smooth scrolling
const initSmoothScrolling = () => {
  // Instantiate the Lenis object with specified properties
  lenis = new Lenis({
    lerp: 0.15, // Lower values create a smoother scroll effect
    smoothWheel: true, // Enables smooth scrolling for mouse wheel events
  });

  // Update ScrollTrigger each time the user scrolls
  lenis.on("scroll", () => ScrollTrigger.update());

  // Define a function to run at each animation frame
  const scrollFn = (time) => {
    lenis.raf(time); // Run Lenis' requestAnimationFrame method
    requestAnimationFrame(scrollFn); // Recursively call scrollFn on each frame
  };
  // Start the animation frame loop
  requestAnimationFrame(scrollFn);
};

function scroll(items) {
  const viewportHeight = window.innerHeight;
  const endValue = viewportHeight / 2;
  // Loop through each grid item to add animations
  items.forEach((item, index) => {
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

// Preload images, initialize smooth scrolling, apply scroll-triggered animations, and remove loading class from body
preloadImages(".grid__item-img-inner").then(() => {
  initSmoothScrolling();
  scroll(gridItems);
  // Initialize grid
  const grid = new Grid(document.querySelector(".gallery_grid"));
});

// const el = document.querySelector("#hamburger .drawer-open");
// el.addEventListener("click", (e) => {
// const dr = document.querySelector("#drawer-input");
// dr.checked = !dr.checked;
// });

const insta = document.querySelector(".instagram a");
insta.addEventListener("click", (e) => {
  e.preventDefault();
  const url = insta.getAttribute("href");
  window.open(url, "_blank");
});
