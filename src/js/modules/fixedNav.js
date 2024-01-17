export function init() {
  const nav = document.querySelector(".js-top");
  const mast = document.querySelector(".masthead__content");
  const navHeight = nav.offsetHeight;
  const section = nav.parentNode;

  const opts = {};

  const createObserver = (el, fn) => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => fn(entry));
    }, opts);
    observer.observe(el);
  };

  const navState = (entry) => {
    if (!entry.isIntersecting) {
      nav.style.transform = "translateY(-100%)";
    } else {
      nav.style.transform = null;
    }
  };

  const sectionObserver = (entry) => {
    // Если вышел из области секции
    if (!entry.isIntersecting) {
      nav.style.transform = null;
      nav.classList.add("top--scrolled");
      mast.style.paddingTop = `${navHeight}px`;
    } else {
      nav.style.transform = "translateY(-100%)";
    }
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY == 0 && nav.classList.contains("top--scrolled")) {
      mast.style.paddingTop = `0`;
      nav.classList.remove("top--scrolled");

      nav.style.transform = null;
    }
  });

  createObserver(nav, navState);
  createObserver(section, sectionObserver);
}
