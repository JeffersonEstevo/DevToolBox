document.getElementById('lowercase-letter-button').addEventListener('click', convertToLowercase);
document.getElementById('uppercase-letter-button').addEventListener('click', convertToUppercase);
document.getElementById('capitalize-button').addEventListener('click', capitalizeText);
document.getElementById('alternate-button').addEventListener('click', alternateText);
document.getElementById('camelcase-button').addEventListener('click', convertToCamelCase);
document.getElementById('clean-button').addEventListener('click', cleanText);
document.getElementById('copy-button').addEventListener('click', copyText);

function convertToLowercase() {
    var originalText = document.getElementById('original-text').value;
    var modifiedText = originalText.toLowerCase();
    document.getElementById('modified-text').value = modifiedText;
}

function convertToUppercase() {
    var originalText = document.getElementById('original-text').value;
    var modifiedText = originalText.toUpperCase();
    document.getElementById('modified-text').value = modifiedText;
}

function capitalizeText() {
    var originalText = document.getElementById('original-text').value;
    var modifiedText = originalText.replace(/\b\w/g, function(char) {
        return char.toUpperCase();
    });
    document.getElementById('modified-text').value = modifiedText;
}

function alternateText() {
    var originalText = document.getElementById('original-text').value;
    var modifiedText = originalText.split('').map((char, index) => {
        return index % 2 === 0 ? char.toLowerCase() : char.toUpperCase();
    }).join('');
    document.getElementById('modified-text').value = modifiedText;
}

function convertToCamelCase() {
    var originalText = document.getElementById('original-text').value;
    var modifiedText = originalText
        .replace(/\s(.)/g, function(match, group1) {
            return group1.toUpperCase();
        })
        .replace(/\s/g, '')
        .replace(/^(.)/, function(match, group1) {
            return group1.toLowerCase();
        });
    document.getElementById('modified-text').value = modifiedText;
}

function cleanText() {
    document.getElementById('original-text').value = '';
    document.getElementById('modified-text').value = '';
}

function copyText() {
    var modifiedText = document.getElementById('modified-text');
    modifiedText.select();
    modifiedText.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand('copy');
    document.getElementById('copy-alert').classList.remove('d-none');
    setTimeout(function() {
        document.getElementById('copy-alert').classList.add('d-none');
    }, 2000);
}
