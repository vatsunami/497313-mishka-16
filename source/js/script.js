var menuButton = document.querySelector(".page-header__toggle");
var menuFirst = document.querySelector(".page-header__menu--first");
var menuSecond = document.querySelector(".page-header__menu--second");
var cart = document.querySelectorAll(".js-button-cart");
var overlay = document.querySelector(".overlay");

menuButton.addEventListener("click", function (evt) {
  if (menuButton.classList.contains("page-header__toggle--close")) {
    menuButton.classList.remove("page-header__toggle--close");
    menuFirst.classList.remove("page-header__menu--show");
    menuSecond.classList.remove("page-header__menu--show");
  } else {
    menuButton.classList.add("page-header__toggle--close");
    menuFirst.classList.add("page-header__menu--show");
    menuSecond.classList.add("page-header__menu--show");
  }
});


if (cart) {
  var cartPopup = document.querySelector(".modal-cart");

  for (var i = 0; i < cart.length; i++) {
    cart[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      cartPopup.classList.add("modal-cart--show");
      overlay.classList.remove("visually-hidden");
    });
    overlay.addEventListener("click", function (evt) {
      cartPopup.classList.remove("modal-cart--show");
      overlay.classList.add("visually-hidden");
    });
  };

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (cartPopup.classList.contains("modal-show")) {
        evt.preventDefault();
        cartPopup.classList.remove("modal-show");
      }
    }
  });
}
