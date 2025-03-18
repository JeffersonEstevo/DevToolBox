document.getElementById("calculate-rule").addEventListener("click", function () {
    const a = parseFloat(document.getElementById("value-a").value);
    const b = parseFloat(document.getElementById("value-b").value);
    const c = parseFloat(document.getElementById("value-c").value);

    if (!isNaN(a) && !isNaN(b) && !isNaN(c) && b !== 0) {
        const x = (b * c) / a;
        document.getElementById("value-x").value = x.toFixed(2);
    } else {
        document.getElementById("value-x").value = "Erro nos valores";
    }
});

document.getElementById("copy-rule").addEventListener("click", function () {
    const result = document.getElementById("value-x");
    result.select();
    document.execCommand("copy");

    const alert = document.getElementById("copy-alert-rule");
    alert.classList.remove("d-none");

    setTimeout(() => {
        alert.classList.add("d-none");
    }, 2000);
});
