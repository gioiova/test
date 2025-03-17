document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    sections.forEach(section => {
        section.addEventListener("click", function () {
            alert(`You clicked on: ${this.querySelector("h2").textContent}`);
        });
    });
});
