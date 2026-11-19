const main = document.getElementById("main");
const cv_btn = document.getElementById("cv-btn");
const portfolio_btn = document.getElementById("portfolio-btn");


async function loadPage(url) {
    const response = await fetch(url);

    main.innerHTML = await response.text();
}