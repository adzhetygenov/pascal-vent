export function init() {
  const btns = Array.from(document.querySelectorAll(".js-tab-trigger"));
  const tabs = Array.from(document.querySelectorAll(".services__content"));

  const handler = (e) => {
    const current = e.target;
    const triggerId = current.dataset.tabTrigger;
    const tab = document.querySelector(`[data-tab='${triggerId}']`);

    tabs
      .filter((el) => el != tab)
      .map((el) => {
        el.classList.remove("services__content--current");
      });

    btns
      .filter((el) => el != current)
      .map((el) => el.classList.remove("services__btn--active"));

    current.classList.add("services__btn--active");
    tab.classList.add("services__content--current");
  };

  btns.map((btn) => {
    btn.addEventListener("click", (e) => handler(e));
  });
}
