document.addEventListener("DOMContentLoaded", e => {
    let questions = document.querySelector(".questions");
    questions.addEventListener("click", () => {
        togglePannel = document.querySelector(".toggle-pannel");
        togglePannel.classList.toggle("active");
    })


});