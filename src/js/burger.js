const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const bars = document.querySelector('.bars');

//добавляет или удаляет класс ".showMenu" в зависимости от его наличия
function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
    } else {
        menu.classList.add("showMenu");
    }
}

//добавляет или удаляет класс ".stop-scrolling" в зависимости от его наличия
function scrollBody() {
    if (document.body.classList.contains("stop-scrolling")) {
        document.body.classList.remove("stop-scrolling");
    } else {
        document.body.classList.add("stop-scrolling");
    }
}

// кликая на кнопку вызываем toggle menu
hamburger.addEventListener("click", toggleMenu);
// кликая на кнопку вызываем scrollBody
hamburger.addEventListener("click", scrollBody);

//кликая по ссылке меню вызываем toggle menu
menuItems.forEach(
    function (menuItem) {
        menuItem.addEventListener("click", toggleMenu);
    }
)

menuItems.forEach(
    function (menuItem) {
        menuItem.addEventListener("click", scrollBody);
    }
)
//кликая по ссылке меню вызываем myFunction
menuItems.forEach(
    function (menuItem) {
        menuItem.addEventListener("click", myFunction);
    }
)

// анимируем кнопку
function myFunction() {
    if (bars.classList.contains('change')) {
        bars.classList.remove('change');
    } else {
        bars.classList.add('change');
    }
}

// анимируем кнопку
// function myFunction(x) {
//     x.classList.toggle("change");
// }