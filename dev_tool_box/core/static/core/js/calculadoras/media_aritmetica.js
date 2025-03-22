document.getElementById("input-numbers").addEventListener("input", calculateResults);

function calculateResults() {
    const input = document.getElementById("input-numbers").value;

    // Substituir vírgulas e normalizar para lidar corretamente com separadores
    const values = input.split(/[\n,]+/) // Divide os elementos por vírgulas ou novas linhas
        .map(v => parseFloat(v.trim().replace(',', '.'))) // Substitui vírgula decimal por ponto e converte para número
        .filter(v => !isNaN(v)); // Filtra apenas números válidos

    const numberOfTerms = values.length;
    const minValue = Math.min(...values);
    const maxValue = Math.max(...values);
    const range = maxValue - minValue;
    const meanValue = values.reduce((acc, val) => acc + val, 0) / numberOfTerms || 0;

    document.getElementById("number-of-terms").value = numberOfTerms || "Nenhum valor";
    document.getElementById("min-value").value = numberOfTerms ? minValue : "Nenhum valor";
    document.getElementById("max-value").value = numberOfTerms ? maxValue : "Nenhum valor";
    document.getElementById("range-values").value = numberOfTerms ? range : "Nenhum valor";
    document.getElementById("mean-value").value = numberOfTerms ? meanValue.toFixed(2) : "Nenhum valor";
}

// Função para copiar texto
function copyToClipboard(elementId, alertId) {
    const textToCopy = document.getElementById(elementId).value;
    navigator.clipboard.writeText(textToCopy).then(() => {
        const alert = document.getElementById(alertId);
        alert.classList.remove("d-none");
        setTimeout(() => alert.classList.add("d-none"), 2000);
    });
}

document.getElementById("copy-terms").addEventListener("click", () => copyToClipboard("number-of-terms", "copy-alert-terms"));
document.getElementById("copy-min").addEventListener("click", () => copyToClipboard("min-value", "copy-alert-min"));
document.getElementById("copy-max").addEventListener("click", () => copyToClipboard("max-value", "copy-alert-max"));
document.getElementById("copy-range").addEventListener("click", () => copyToClipboard("range-values", "copy-alert-range"));
document.getElementById("copy-mean").addEventListener("click", () => copyToClipboard("mean-value", "copy-alert-mean"));