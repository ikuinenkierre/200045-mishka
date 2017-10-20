var pagesMenu = document.querySelector(".page-header__pages-list");
var userMenu = document.querySelector(".page-header__user-list");
var toggleMenuButton = document.querySelector(".page-header__toggle");
var toggleMenuButtonHide = document.querySelector(".page-header__toggle--no-js");
var pagesMenuHide = document.querySelector(".page-header__pages-list--no-js");
var userMenuHide = document.querySelector(".page-header__user-list--no-js");
var orderButton = document.querySelector(".buy-btn");
var modal = document.querySelector(".modal");
var overlay = document.querySelector(".modal--overlay");
var modalWindow = document.querySelector(".modal__window");

pagesMenuHide.classList.remove("page-header__pages-list--no-js");
userMenuHide.classList.remove("page-header__user-list--no-js");
toggleMenuButtonHide.classList.remove("page-header__toggle--no-js");

toggleMenuButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    toggleMenuButton.classList.toggle("page-header__toggle--close");
    pagesMenu.classList.toggle("page-header__pages-list--hide");
    userMenu.classList.toggle("page-header__user-list--hide");
});

orderButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.add("modal--show");
});

overlay.addEventListener("click", function (evt) {
    modal.classList.remove("modal--show");
});

modalWindow.addEventListener("click", function (evt) {
    event.stopPropagation();
});
