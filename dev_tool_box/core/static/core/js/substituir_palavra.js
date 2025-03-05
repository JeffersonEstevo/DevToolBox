
/*document.addEventListener("DOMContentLoaded", function () {
    console.log("Script substituir_palavra.js carregado!");

    let replaceButton = document.getElementById("replace-button");

    if (!replaceButton) {
        console.error("Erro: Botão 'replace-button' não encontrado!");
        return;
    }

    replaceButton.addEventListener("click", function () {
        console.log("Botão clicado!");

        let originalText = document.getElementById("original-text").value;
        let wordToReplace = document.getElementById("word-to-replace").value;
        let replacementWord = document.getElementById("replacement-word").value;

        if (!originalText || !wordToReplace) {
            alert("Preencha o texto original e a palavra a ser substituída.");
            return;
        }

        let regex = new RegExp(wordToReplace, "gi");
        let finalText = originalText.replace(regex, replacementWord);

        document.getElementById("final-text").value = finalText;
        console.log("Texto final atualizado:", finalText);
    });
});
*/


document.addEventListener("DOMContentLoaded", function() {
    // Função para configurar os ouvintes de eventos
    function setupEventListeners() {
        const replaceButton = document.getElementById("replace-button");
        const copyButton = document.getElementById("copy-button");
        const copyAlert = document.getElementById("copy-alert");

        if (replaceButton) {
            replaceButton.addEventListener("click", function() {
                const originalText = document.getElementById("original-text").value;
                const wordToReplace = document.getElementById("word-to-replace").value;
                const replacementWord = document.getElementById("replacement-word").value;

                const finalText = originalText.split(wordToReplace).join(replacementWord);
                document.getElementById("final-text").value = finalText;
            });
        } else {
            console.error("Erro: Botão 'replace-button' não encontrado!");
        }

        if (copyButton) {
            copyButton.addEventListener("click", function() {
                const finalText = document.getElementById("final-text");
                finalText.select();
                finalText.setSelectionRange(0, 99999); // Para dispositivos móveis

                try {
                    document.execCommand("copy");
                    copyAlert.classList.remove("d-none");
                    setTimeout(function() {
                        copyAlert.classList.add("d-none");
                    }, 3000); // Oculta o alerta após 3 segundos
                } catch (err) {
                    console.error("Erro ao copiar texto: ", err);
                }
            });
        } else {
            console.error("Erro: Botão 'copy-button' não encontrado!");
        }
    }

    setupEventListeners();
});
