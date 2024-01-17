import gsap from "gsap";

export function init() {
  const modal = document.querySelector(".js-modal");
  const trigger = document.querySelectorAll(".js-modal-trigger");
  const closeBtn = modal.querySelector(".js-modal-close");

  const scrollBarWidth =
    window.innerWidth - document.documentElement.clientWidth;

  const modalContentBlock = modal.querySelector(".js-modal-content");
  const modalTitle = modal.querySelector(".js-modal-title");

  const tl = gsap.timeline({
    defaults: {
      ease: "power4.easeOut",
      duration: 0.24
    },
    onReverseComplete() {
      modalContentBlock.innerHTML = "";
      modalTitle.textContent = "";

      document.body.classList.remove("open");
      document.body.style.paddingRight = null;
    }
  });

  tl.fromTo(
    modal,
    {
      display: "none",
      opacity: 0
    },
    {
      display: "block",
      opacity: 1
    }
  ).fromTo(
    ".modal__body",
    {
      y: -150,
      opacity: 0
    },
    {
      y: 0,
      opacity: 1
    },
    ">"
  );

  tl.pause();

  trigger.forEach((el) => {
    el.addEventListener("click", (e) => {
      const current = e.target;
      const modalType = current.dataset.modal;

      const contentQuickForm = `
		<div class="modal__text">
			<p class="text">Вы можете набрать нам, и менеджеры Pascal Vent с радостью проконсультирует Вас по любому вопросу и помогут определиться с выбором.</p>
		</div>
		<div class="modal__contacts">
			<address class="modal__address">
				<p class="modal__item modal__item--caption">График приема звонков:</p>
				<p class="modal__item modal__item--time">ПН-СБ с 9:00 до 19:00</p>	
			</address>

			<address class="modal__address modal__address--phone">
				<a class="modal__item modal__item--phone" href="">+ 7 492 373 63 31</a>
				<a class="modal__item modal__item--phone" href="">+ 7 424 367 89 29</a>
			</address>
		</div>
		`;

      const contentCallbackForm = `
			<form class="callback__form">
				<input class="callback__input" type="text" placeholder="Ваше имя" />
				<input class="callback__input js-masked-phone" type="text" placeholder="Ваш телефон" />
				<button class="btn callback__btn">Отправить</button>
			</form>
		`;

      if (modalType === "quick_form") {
        modalTitle.textContent = "Быстрая связь с нами";
        modalContentBlock.insertAdjacentHTML("afterbegin", contentQuickForm);
      } else {
        modalTitle.textContent = "Мы свяжемся с вами";
        modalContentBlock.insertAdjacentHTML("afterbegin", contentCallbackForm);
      }

      document.body.classList.add("open");
      document.body.style.paddingRight = `${scrollBarWidth}px`;
      tl.play();
    });
  });

  closeBtn.addEventListener("click", () => {
    tl.reverse();
  });
}
