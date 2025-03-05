document.addEventListener("DOMContentLoaded", function() {
    const textArea = document.getElementById("original-text");
    const charCount = document.getElementById("char-count");
    const wordCount = document.getElementById("word-count");
    const paragraphCount = document.getElementById("paragraph-count");
    const lineCount = document.getElementById("line-count");

    function updateCounts() {
        const text = textArea.value;

        charCount.textContent = text.length;

        const words = text.trim().split(/\s+/);
        wordCount.textContent = words.filter(word => word).length;

        const paragraphs = text.split(/\n+/);
        paragraphCount.textContent = paragraphs.filter(paragraph => paragraph.trim()).length;

        const lines = text.split("\n");
        lineCount.textContent = lines.length;
    }

    textArea.addEventListener("input", updateCounts);
    updateCounts(); // Atualiza as contagens ao carregar a página
});
