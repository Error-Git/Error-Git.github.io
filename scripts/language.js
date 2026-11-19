const lang_spans = document.getElementsByClassName("lang");


function change_lang() {
    Array.from(lang_spans).forEach(element => {
        element.classList.toggle("visible-toggle");
    });
}