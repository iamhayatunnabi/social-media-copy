var settingsmenu = document.querySelector(".settings-menu");
var darkBtn = document.getElementById("dark-b");
function settingsMenuToggle() {
    settingsmenu.classList.toggle("settings-menu-height");
}
darkBtn.onclick = function () {
    darkBtn.classList.toggle("dark-b-on");
    document.body.classList.toggle("dark-theme");
}
