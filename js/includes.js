function loadPartial(selector, file) {
    const element = document.querySelector(selector);
    if (!element) return;

    fetch(file)
        .then(response => response.text())
        .then(html => {
            element.innerHTML = html;
        })
        .catch(error => console.error("Erro ao carregar:", file, error));
}

document.addEventListener("DOMContentLoaded", () => {
    loadPartial("header", "header.html");
    loadPartial("footer", "footer.html");
});
