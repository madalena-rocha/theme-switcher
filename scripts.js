let switchTheme = document.querySelector('#switch-theme');
let themeSwitcher = document.querySelector('.theme-switcher');
let container = document.querySelector('.container');

switchTheme.onclick = function() {
    themeSwitcher.classList.toggle('active');
    container.classList.toggle('active');
}