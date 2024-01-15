import { gsap } from "gsap";

export function init() {
  const btn = document.querySelector(".js-mobile");
  const nav = document.querySelector(".nav");
  const activeClass = "nav--is-open";

  let media = gsap.matchMedia();

  let tl = gsap.timeline({ paused: true, duration: 0.2, ease: "expo.inOut" });

  media.add("(max-width: 767px)", () => {
    tl.fromTo(
      ".nav",
      {
        display: "none"
      },
      {
        display: "flex",
        height: "100%"
      }
    );

    tl.from(document.querySelectorAll(".nav__item"), {
      opacity: 0,
      y: 20,
      stagger: 0.1
    });

    tl.reverse();
  });

  btn.addEventListener("click", () => {
    tl.reversed(!tl.reversed());
    document.body.classList.toggle("open");
  });
}
