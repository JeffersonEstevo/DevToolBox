function countWords() {
    const text = document.getElementById("original-text").value;
    const words = text.split(/\s+/).filter(word => word.length > 0);

    const wordFreq = {};
    words.forEach(word => {
        wordFreq[word] = (wordFreq[word] || 0) + 1;
    });

    const repeatedWords = Object.keys(wordFreq).filter(word => wordFreq[word] > 1);
    const repeatedWordsContainer = document.getElementById("repeated-words");
    repeatedWordsContainer.innerHTML = "";

    repeatedWords.forEach(word => {
        const wordElement = document.createElement("p");
        wordElement.textContent = `${word}: ${wordFreq[word]} vezes`;
        repeatedWordsContainer.appendChild(wordElement);
    });
}
