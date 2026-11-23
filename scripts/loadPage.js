const main = document.getElementById("main");
const cv_btn = document.getElementById("cv-btn");
const portfolio_btn = document.getElementById("portfolio-btn");


async function loadPage(url) {
    const response = await fetch(url);

    main.innerHTML = await response.text();

    if (localStorage.getItem("lang") === "sv") {
        toggleLang();
    }

    localStorage.setItem("page", `${url}`);
}


const saved_page = localStorage.getItem("page") || "pages/cv.html";
loadPage(saved_page);