document.getElementById('invert-button').addEventListener('click', invertText);

function invertText() {
    var originalText = document.getElementById('original-text').value;
    var invertedText = originalText.split('').reverse().join('');
    document.getElementById('inverted-text').value = invertedText;
}
