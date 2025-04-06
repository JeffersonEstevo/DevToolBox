document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("result");
    const buttons = document.querySelectorAll(".buttons button");
    let expression = "";

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            handleInput(this.textContent);
        });
    });

    document.addEventListener("keydown", function (event) {
        const key = event.key;
        if (/^[0-9+\-*/().]$/.test(key)) {
            handleInput(key);
        } else if (key === "Enter") {
            handleInput("=");
        } else if (key === "Backspace") {
            expression = expression.slice(0, -1);
        } else if (key === "Escape") {
            handleInput("AC");
        }
        display.value = expression;
    });

    function handleInput(value) {
        if (value === "AC") {
            expression = "";
        } else if (value === "=") {
            try {
                expression = eval(expression.replace("π", "Math.PI"));
            } catch (error) {
                expression = "Erro";
            }
        } else if (value === "x²") {
            expression += "**2";
        } else if (value === "x³") {
            expression += "**3";
        } else if (value === "√x") {
            expression = `Math.sqrt(${expression})`;
        } else if (value === "∛x") {
            expression = `Math.cbrt(${expression})`;
        } else if (value === "sin") {
            expression = `Math.sin(${expression})`;
        } else if (value === "cos") {
            expression = `Math.cos(${expression})`;
        } else if (value === "tan") {
            expression = `Math.tan(${expression})`;
        } else if (value === "log") {
            expression = `Math.log10(${expression})`;
        } else if (value === "ln") {
            expression = `Math.log(${expression})`;
        } else if (value === "exp") {
            expression = `Math.exp(${expression})`;
        } else if (value === "1/x") {
            expression = `1/(${expression})`;
        } else {
            expression += value;
        }
        display.value = expression;
    }

    // Estilização da interface melhorada e organização correta dos botões
    document.querySelector(".calculator").style.cssText = "width: 350px; background: linear-gradient(145deg, #1c1c1c, #282828); padding: 20px; border-radius: 20px; text-align: center; box-shadow: 6px 6px 18px #111, -6px -6px 18px #333; margin: 50px auto;";
    document.querySelector(".display input").style.cssText = "width: 100%; height: 70px; font-size: 2rem; text-align: right; padding: 10px; margin-bottom: 20px; border: none; background: #333; color: white; border-radius: 12px; box-shadow: inset 4px 4px 6px #111, inset -4px -4px 6px #555;";
    
    const buttonsContainer = document.querySelector(".buttons");
    buttonsContainer.style.cssText = "display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; justify-content: center; padding: 10px;";
    
    // Definição dos botões corretamente organizados
    const buttonLayout = [
        "m+", "m-", "%", "mc",
        "(", ")", "1/x", "AC",
        "x²", "x³", "y^x", "√x",
        "∛x", "+/-", "!", "/",
        "sin", "cos", "tan", "log",
        "ln", "exp", "7", "8",
        "9", "*", "4", "5",
        "6", "-", "1", "2",
        "3", "+", "0", ".",
        "π", "=", "EE", "Rand"
    ];
    
    buttonsContainer.innerHTML = "";
    buttonLayout.forEach(label => {
        const btn = document.createElement("button");
        btn.textContent = label;
        buttonsContainer.appendChild(btn);
        btn.style.cssText = "padding: 15px; font-size: 1.4rem; border: none; background: #242424; color: white; border-radius: 10px; cursor: pointer; transition: 0.3s; box-shadow: 4px 4px 6px #111, -4px -4px 6px #444;";
        btn.addEventListener("mouseover", () => btn.style.background = "#555");
        btn.addEventListener("mouseout", () => btn.style.background = "#242424");
        btn.addEventListener("mousedown", () => btn.style.boxShadow = "inset 3px 3px 6px #111, inset -3px -3px 6px #444");
        btn.addEventListener("mouseup", () => btn.style.boxShadow = "4px 4px 6px #111, -4px -4px 6px #444");
        
        if (label === "AC") {
            btn.style.background = "#d9534f";
        } else if (label === "=") {
            btn.style.background = "#5cb85c";
        }
    });
});