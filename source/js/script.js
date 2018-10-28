var modal = document.querySelectorAll(".js-modal-show");
var popup = document.querySelector(".modal");
var PopupClose = popup.querySelector(".modal__button");



if (modal) {
  for (var i = 0; i < modal.length; i++){
    modal[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.add("modal-show");
    });
  }

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
}
