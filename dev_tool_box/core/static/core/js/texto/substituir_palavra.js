
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
    function setupEventListeners() {
        const replaceButton = document.getElementById("replace-button");
        const copyButton = document.getElementById("copy-button");
        const copyAlert = document.getElementById("copy-alert");
        const originalTextArea = document.getElementById("original-text");

        originalTextArea.addEventListener("paste", function(event) {
            event.preventDefault();
            let text = (event.clipboardData || window.clipboardData).getData("text");
            console.log("Texto colado antes da modificação:", JSON.stringify(text));
            document.execCommand("insertText", false, text);
        });

        if (replaceButton) {
            replaceButton.addEventListener("click", function() {
                let originalText = originalTextArea.value;
                const wordToReplace = document.getElementById("word-to-replace").value;
                const replacementWord = document.getElementById("replacement-word").value;
                const replaceTabs = document.getElementById("replace-tabs").checked;
                let tabReplacement = document.getElementById("tab-replacement").value;

                // Se o campo estiver vazio, usa 4 espaços como padrão
                if (!tabReplacement) {
                    tabReplacement = "    ";
                }

                //console.log("Texto original recebido:", JSON.stringify(originalText));

                let finalText = originalText;

                if (wordToReplace) {
                    finalText = finalText.replace(new RegExp(wordToReplace, 'g'), replacementWord);
                }

                if (replaceTabs) {
                    finalText = finalText.replace(/\t/g, tabReplacement);
                    //console.log(`Texto após substituir tabulações por: "${tabReplacement}"`, JSON.stringify(finalText));
                }

                document.getElementById("final-text").value = finalText;
                //console.log("Texto final exibido:", JSON.stringify(finalText));
            });
        }

        if (copyButton) {
            copyButton.addEventListener("click", function() {
                const finalText = document.getElementById("final-text");
                finalText.select();
                finalText.setSelectionRange(0, 99999);

                try {
                    document.execCommand("copy");
                    copyAlert.classList.remove("d-none");
                    setTimeout(() => copyAlert.classList.add("d-none"), 3000);
                } catch (err) {
                    console.error("Erro ao copiar texto: ", err);
                }
            });
        }
    }

    setupEventListeners();
});


