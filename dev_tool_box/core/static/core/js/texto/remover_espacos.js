document.getElementById('remove-space-button').addEventListener('click', removeExtraSpaces);
document.getElementById('clean-button').addEventListener('click', cleanText);
document.getElementById('copy-button').addEventListener('click', copyText);

function removeExtraSpaces() {
    var originalText = document.getElementById('original-text').value;
    var modifiedText = originalText.replace(/\s+/g, ' ').trim();
    document.getElementById('modified-text').value = modifiedText;
}

function cleanText() {
    document.getElementById('original-text').value = '';
    document.getElementById('modified-text').value = '';
}

function copyText() {
    var modifiedText = document.getElementById('modified-text');
    modifiedText.select();
    modifiedText.setSelectionRange(0, 99999); // Para dispositivos móveis
    document.execCommand('copy');
    document.getElementById('copy-alert').classList.remove('d-none');
    setTimeout(function() {
        document.getElementById('copy-alert').classList.add('d-none');
    }, 2000);
}
