const header = document.getElementById("header");
const main = document.getElementById("main");

const darkmode_btn = document.getElementById("darkmode-btn");


function darkmode() {
    main.classList.toggle("dark-mode");
    header.classList.toggle("dark-mode");
}