const lang_spans = document.getElementsByClassName("lang");


function toggleLang() {
    Array.from(lang_spans).forEach(element => {
        element.classList.toggle("visible-toggle");
    });
}


function changeLang() {
    toggleLang();

    if (localStorage.getItem("lang") === "sv") {
        localStorage.setItem("lang", "en");
    } else {
        localStorage.setItem("lang", "sv");
    }
}


if (localStorage.getItem("lang") === "sv") {
    toggleLang();
}