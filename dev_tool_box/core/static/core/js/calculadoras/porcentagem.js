document.addEventListener('DOMContentLoaded', function () {
    // Função para copiar texto e mostrar alerta
    function setupCopy(buttonId, resultId, alertId) {
        const button = document.getElementById(buttonId);
        const result = document.getElementById(resultId);
        const alert = document.getElementById(alertId);

        button.addEventListener('click', function () {
            result.select();
            document.execCommand('copy');
            alert.classList.remove('d-none');
            alert.classList.add('show');
            setTimeout(() => {
                alert.classList.remove('show');
                alert.classList.add('d-none');
            }, 2000);
        });
    }

    // Configurar funções de cópia
    setupCopy('copy-quantity', 'result-quantity', 'copy-alert-quantity');
    setupCopy('copy-percentage', 'result-percentage', 'copy-alert-percentage');
    setupCopy('copy-total', 'result-total-value', 'copy-alert-total');
    setupCopy('copy-increase', 'result-increase', 'copy-alert-increase');
    setupCopy('copy-decrease', 'result-decrease', 'copy-alert-decrease');

    // Funções individuais de cálculo
    function calculateQuantity() {
        const percentage = parseFloat(document.getElementById('percentage-of-value').value);
        const value = parseFloat(document.getElementById('value-of-percentage').value);
        const result = (percentage / 100) * value;
        document.getElementById('result-quantity').value = isNaN(result) ? 'Valores inválidos' : result.toFixed(2);
    }

    function calculatePercentage() {
        const partial = parseFloat(document.getElementById('partial-value').value);
        const total = parseFloat(document.getElementById('total-value').value);
        const result = (partial / total) * 100;
        document.getElementById('result-percentage').value = isNaN(result) ? 'Valores inválidos' : `${result.toFixed(2)}%`;
    }

    function calculateTotalValue() {
        const partial = parseFloat(document.getElementById('partial-value-of-total').value);
        const percentage = parseFloat(document.getElementById('percentage-of-total').value);
        const result = (partial / percentage) * 100;
        document.getElementById('result-total-value').value = isNaN(result) ? 'Valores inválidos' : result.toFixed(2);
    }

    function calculateIncrease() {
        const base = parseFloat(document.getElementById('base-value-increase').value);
        const percentage = parseFloat(document.getElementById('percentage-increase').value);
        const result = base + (base * (percentage / 100));
        document.getElementById('result-increase').value = isNaN(result) ? 'Valores inválidos' : result.toFixed(2);
    }

    function calculateDecrease() {
        const base = parseFloat(document.getElementById('base-value-decrease').value);
        const percentage = parseFloat(document.getElementById('percentage-decrease').value);
        const result = base - (base * (percentage / 100));
        document.getElementById('result-decrease').value = isNaN(result) ? 'Valores inválidos' : result.toFixed(2);
    }

    // Configurar eventos de cálculo
    document.getElementById('percentage-of-value').addEventListener('input', calculateQuantity);
    document.getElementById('value-of-percentage').addEventListener('input', calculateQuantity);

    document.getElementById('partial-value').addEventListener('input', calculatePercentage);
    document.getElementById('total-value').addEventListener('input', calculatePercentage);

    document.getElementById('partial-value-of-total').addEventListener('input', calculateTotalValue);
    document.getElementById('percentage-of-total').addEventListener('input', calculateTotalValue);

    document.getElementById('base-value-increase').addEventListener('input', calculateIncrease);
    document.getElementById('percentage-increase').addEventListener('input', calculateIncrease);

    document.getElementById('base-value-decrease').addEventListener('input', calculateDecrease);
    document.getElementById('percentage-decrease').addEventListener('input', calculateDecrease);
});
