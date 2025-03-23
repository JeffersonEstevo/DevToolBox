document.getElementById("calculate").addEventListener("click", function () {
    let num1 = parseInt(document.getElementById("numerator1").value);
    let den1 = parseInt(document.getElementById("denominator1").value);
    let num2 = parseInt(document.getElementById("numerator2").value);
    let den2 = parseInt(document.getElementById("denominator2").value);
    let operation = document.getElementById("operation").value;
    
    if (isNaN(num1) || isNaN(den1) || isNaN(num2) || isNaN(den2) || den1 === 0 || den2 === 0) {
        alert("Por favor, insira valores válidos e denominadores diferentes de zero.");
        return;
    }

    let resultNum, resultDen;
    switch (operation) {
        case "add":
            resultNum = num1 * den2 + num2 * den1;
            resultDen = den1 * den2;
            break;
        case "subtract":
            resultNum = num1 * den2 - num2 * den1;
            resultDen = den1 * den2;
            break;
        case "multiply":
            resultNum = num1 * num2;
            resultDen = den1 * den2;
            break;
        case "divide":
            resultNum = num1 * den2;
            resultDen = den1 * num2;
            break;
    }
    
    let gcd = function (a, b) {
        return b === 0 ? a : gcd(b, a % b);
    };
    let divisor = gcd(resultNum, resultDen);
    resultNum /= divisor;
    resultDen /= divisor;
    
    let fractionResult = document.getElementById("fraction-result");
    let decimalResult = document.getElementById("decimal-result");
    
    document.getElementById("calculate").addEventListener("click", function () {
        let num1 = parseInt(document.getElementById("numerator1").value);
        let den1 = parseInt(document.getElementById("denominator1").value);
        let num2 = parseInt(document.getElementById("numerator2").value);
        let den2 = parseInt(document.getElementById("denominator2").value);
        let operation = document.getElementById("operation").value;
        
        if (isNaN(num1) || isNaN(den1) || isNaN(num2) || isNaN(den2) || den1 === 0 || den2 === 0) {
            alert("Por favor, insira valores válidos e denominadores diferentes de zero.");
            return;
        }
    
        let resultNum, resultDen;
        switch (operation) {
            case "add":
                resultNum = num1 * den2 + num2 * den1;
                resultDen = den1 * den2;
                break;
            case "subtract":
                resultNum = num1 * den2 - num2 * den1;
                resultDen = den1 * den2;
                break;
            case "multiply":
                resultNum = num1 * num2;
                resultDen = den1 * den2;
                break;
            case "divide":
                resultNum = num1 * den2;
                resultDen = den1 * num2;
                break;
        }
        
        let gcd = function (a, b) {
            return b === 0 ? a : gcd(b, a % b);
        };
        let divisor = gcd(resultNum, resultDen);
        resultNum /= divisor;
        resultDen /= divisor;
        
        let fractionResult = document.getElementById("fraction-result");
        let decimalResult = document.getElementById("decimal-result");
        
        let resultBoxStyle = "padding: 10px; border-radius: 8px; text-align: center; display: inline-block; font-size: 1.5rem; font-weight: bold; width: fit-content; min-width: 60px; max-width: 200px;";
    
        fractionResult.innerHTML = `<div style="${resultBoxStyle}">
                                        <math display="block">
                                            <mfrac>
                                                <mn>${resultNum}</mn>
                                                <mn>${resultDen}</mn>
                                            </mfrac>
                                        </math>
                                    </div>`;
        decimalResult.innerHTML = `<div style="${resultBoxStyle}">
                                        ${(resultNum / resultDen).toFixed(4)}
                                    </div>`;
        
        fractionResult.style.textAlign = "center";
        decimalResult.style.textAlign = "center";
        fractionResult.style.width = "50%";
        fractionResult.style.margin = "0 auto";
        decimalResult.style.width = "50%";
        decimalResult.style.margin = "0 auto";
    });
    
});
