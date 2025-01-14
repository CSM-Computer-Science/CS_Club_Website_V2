document.addEventListener("DOMContentLoaded", function () {
    const words = ["LEARNING", "GROWING", "BUILDING"];
    const hexes = document.querySelectorAll('.hex');
    const captionElement = document.getElementById('hex-caption');
    const selectedImage = document.getElementById('selected-image');

    let wordIndex = 0;
    let currentHexIndex = 0;

    let hexInterval;

    function changeWord() {
        const wordElement = document.querySelector(".highlight");
        wordElement.textContent = words[wordIndex];
        wordIndex = (wordIndex + 1) % words.length;
    }

    function clearSelection() {
        hexes.forEach((hex) => {
            hex.classList.remove('selected');
        });
    }

    function selectHex(i) {
        clearSelection();
        const hex = hexes[i];
        hex.classList.add('selected');

        const imgElement = hex.querySelector('img');
        selectedImage.src = imgElement.src;
        selectedImage.alt = imgElement.alt;

        const captionText = hex.dataset.caption;
        captionElement.textContent = captionText;
    }

    hexes.forEach((hex, i) => {
        hex.addEventListener('click', () => {
            currentHexIndex = i;
            selectHex(currentHexIndex);

            // Stop the auto-cycle for hex images
            clearInterval(hexInterval);
        });
    });

    setInterval(changeWord, 2000);

    hexInterval = setInterval(() => {
        currentHexIndex = (currentHexIndex + 1) % hexes.length;
        selectHex(currentHexIndex);
    }, 6000);

    changeWord();
    selectHex(currentHexIndex);
});
