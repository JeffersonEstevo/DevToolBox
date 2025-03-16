document.addEventListener("DOMContentLoaded", function () {
    const inputText = document.getElementById("input-text");
    const startButton = document.getElementById("start-button");
    const stopButton = document.getElementById("stop-button");
    const reader = document.getElementById("dynamic-reader");
    const readerContainer = document.getElementById("reader-container");
    const currentWord = document.getElementById("current-word");
    const speedInput = document.getElementById("speed");
    const fontSizeInput = document.getElementById("font-size");
    const themeSelect = document.getElementById("theme");

    let words = [];
    let index = 0;
    let interval = null; // Variável global para controle do intervalo

    function startReading() {
        words = inputText.value.trim().split(/\s+/); // Remove espaços extras
        index = 0;

        if (words.length === 0) return;

        // Aplicar tamanho da fonte
        currentWord.style.fontSize = `${fontSizeInput.value}px`;

        // Aplicar tema
        if (themeSelect.value === "dark") {
            readerContainer.classList.remove("reader-light");
            readerContainer.classList.add("reader-dark");
        } else {
            readerContainer.classList.remove("reader-dark");
            readerContainer.classList.add("reader-light");
        }

        // Exibir a tela de leitura dinâmica
        reader.classList.remove("d-none");

        // Evitar múltiplas execuções simultâneas
        if (interval) clearInterval(interval);

        interval = setInterval(() => {
            if (index < words.length) {
                currentWord.textContent = words[index];
                index++;
            } else {
                stopReading(); // Para quando o texto acabar
            }
        }, parseInt(speedInput.value, 10));
    }

    function stopReading() {
        if (interval) {
            clearInterval(interval);
            interval = null;
        }
        reader.classList.add("d-none"); // Ocultar a tela de leitura dinâmica
    }

    // Evento para iniciar a leitura
    startButton.addEventListener("click", startReading);

    // Evento para parar a leitura
    stopButton.addEventListener("click", stopReading);

    // Evento para parar com a tecla "Esc"
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            stopReading();
        }
    });
});
