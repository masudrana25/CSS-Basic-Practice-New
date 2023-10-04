const menu_bar = document.getElementById('menu-bar');
const menu = document.getElementById('menu');

menu_bar.addEventListener('click', function () {
  if (menu.className === "navbar-hidden") {
    menu.classList.remove('navbar-hidden');
  } else {
    menu.classList.add('navbar-hidden');
  }
});
