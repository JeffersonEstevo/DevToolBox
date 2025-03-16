function calculateSimilarity() {
    const text1 = document.getElementById("text1").value.toLowerCase().split(/\W+/);
    const text2 = document.getElementById("text2").value.toLowerCase().split(/\W+/);

    const set1 = new Set(text1);
    const set2 = new Set(text2);

    const intersection = new Set([...set1].filter(word => set2.has(word)));
    const union = new Set([...set1, ...set2]);

    const similarity = (intersection.size / union.size) * 100; // Calcula a porcentagem
    let description = "";
    let cssClass = "";

    // Define o grau de similaridade e a classe CSS correspondente
    if (similarity <= 24) {
        description = "Nenhuma Similaridade";
        cssClass = "similarity-none";
    } else if (similarity <= 49) {
        description = "Insignificante Similaridade";
        cssClass = "similarity-insignificant";
    } else if (similarity <= 74) {
        description = "Reduzida Similaridade";
        cssClass = "similarity-reduced";
    } else if (similarity <= 89) {
        description = "Alguma Similaridade";
        cssClass = "similarity-some";
    } else {
        description = "Bastante Similaridade";
        cssClass = "similarity-high";
    }

    // Atualiza o resultado no card
    const resultElement = document.getElementById("similarity-result");
    resultElement.textContent = `Similaridade: ${similarity.toFixed(2)}% - ${description}`;
    resultElement.className = `freq-word ${cssClass}`;
}
