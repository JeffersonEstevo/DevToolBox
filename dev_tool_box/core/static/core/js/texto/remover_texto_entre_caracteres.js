document.getElementById("extract-button").addEventListener("click", function () {
    const originalText = document.getElementById("original-text").value;
    const delimiter = document.getElementById("delimiter").value;
    const openChar = delimiter.charAt(0);
    const closeChar = delimiter.charAt(1);

    const regex = new RegExp(`\\${openChar}(.*?)\\${closeChar}`, "g");
    const matches = [];
    let match;
    while ((match = regex.exec(originalText)) !== null) {
        matches.push(match[1]);
    }

    document.getElementById("extracted-text").value = matches.join("\n");
});

document.getElementById("clean-button").addEventListener("click", function () {
    document.getElementById("original-text").value = "";
    document.getElementById("extracted-text").value = "";
});

document.getElementById("copy-button").addEventListener("click", function () {
    const extractedText = document.getElementById("extracted-text");
    extractedText.select();
    document.execCommand("copy");

    const copyAlert = document.getElementById("copy-alert");
    copyAlert.classList.remove("d-none");
    setTimeout(() => copyAlert.classList.add("d-none"), 2000);
});
