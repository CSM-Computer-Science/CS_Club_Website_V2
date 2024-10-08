document.addEventListener("DOMContentLoaded", function () {
    const words = ["LEARNING", "GROWING", "BUILDING"];
    let index = 0;

    function changeWord() {
        const wordElement = document.querySelector(".highlight");
        wordElement.textContent = words[index];
        index = (index + 1) % words.length;
    }

    setInterval(changeWord, 2000);
});
