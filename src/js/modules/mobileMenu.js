export function init() {
  const btn = document.querySelector(".js-mobile");
  const nav = document.querySelector(".nav");
  const activeClass = "nav--is-open";

  btn.addEventListener("click", () => {
    nav.classList.toggle(activeClass);
  });
}
