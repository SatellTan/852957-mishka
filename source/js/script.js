var link = document.querySelector(".product-week__order");
var link2 = document.querySelector(".catalog__icon-cart");
var popup = document.querySelector(".modal");
var PopupClose = popup.querySelector(".modal__button");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
});

link2.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
});

PopupClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
    }
  }
});
