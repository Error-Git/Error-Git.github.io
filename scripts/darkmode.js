const header = document.getElementById("header");
const main = document.getElementById("main");

function toggleDarkMode() {
    main.classList.toggle("dark-mode");
    header.classList.toggle("dark-mode");
}

function darkMode() {
    toggleDarkMode();

    if (localStorage.getItem("darkMode") === "on") {
        localStorage.setItem("darkMode", "off");
    } else {
        localStorage.setItem("darkMode", "on");
    }

    console.log("HELLLOOOOO")
}

if (localStorage.getItem("darkMode") === "on") {
    toggleDarkMode();
}