import IMask from "imask";

export function init() {
  const phones = document.querySelectorAll(".js-masked-phone");

  const maskOptions = {
    mask: "+{7}(000) 000-00-00"
  };
  phones.forEach((el) => {
    const mask = new IMask(el, maskOptions);
  });
}
