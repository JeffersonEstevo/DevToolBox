document.getElementById("remove-linebreaks-button").addEventListener("click", function () {
    const originalText = document.getElementById("original-text").value;
    const textWithoutLineBreaks = originalText.replace(/(\r\n|\n|\r)/g, " ").replace(/\s{2,}/g, " ");
    document.getElementById("modified-text").value = textWithoutLineBreaks;
});

document.getElementById("clean-button").addEventListener("click", function () {
    document.getElementById("original-text").value = "";
    document.getElementById("modified-text").value = "";
});

document.getElementById("copy-button").addEventListener("click", function () {
    const modifiedText = document.getElementById("modified-text");
    modifiedText.select();
    document.execCommand("copy");

    const copyAlert = document.getElementById("copy-alert");
    copyAlert.classList.remove("d-none");
    setTimeout(() => copyAlert.classList.add("d-none"), 2000);
});
