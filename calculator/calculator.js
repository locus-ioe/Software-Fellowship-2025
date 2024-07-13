document.addEventListener('DOMContentLoaded', function() {
    const outputElement = document.getElementById('output');
    let currentExpression = '';

    function updateOutput(value) {
        outputElement.textContent = value;
    }

    function handleButtonClick(value) {
        currentExpression += value;
        updateOutput(currentExpression);
    }

    function calculate() {
        try {
            const result = eval(currentExpression);
            updateOutput(result);
            currentExpression = result.toString();
        } catch (error) {
            updateOutput('Error');
            currentExpression = '';
        }
    }

    document.getElementById('btn-ac').addEventListener('click', function() {
        currentExpression = '';
        updateOutput('0');
    });

    document.getElementById('btn-del').addEventListener('click', function() {
        currentExpression = currentExpression.slice(0, -1);
        updateOutput(currentExpression || '0');
    });

    document.getElementById('btn-equals').addEventListener('click', calculate);

    document.getElementById('btn-percent').addEventListener('click', function() {
        handleButtonClick('%');
    });

    document.getElementById('btn-div').addEventListener('click', function() {
        handleButtonClick('/');
    });

    document.getElementById('btn-mul').addEventListener('click', function() {
        handleButtonClick('*');
    });

    document.getElementById('btn-sub').addEventListener('click', function() {
        handleButtonClick('-');
    });

    document.getElementById('btn-plus').addEventListener('click', function() {
        handleButtonClick('+');
    });

    document.getElementById('btn-0').addEventListener('click', function() {
        handleButtonClick('0');
    });

    document.getElementById('btn-1').addEventListener('click', function() {
        handleButtonClick('1');
    });

    document.getElementById('btn-2').addEventListener('click', function() {
        handleButtonClick('2');
    });

    document.getElementById('btn-3').addEventListener('click', function() {
        handleButtonClick('3');
    });

    document.getElementById('btn-4').addEventListener('click', function() {
        handleButtonClick('4');
    });

    document.getElementById('btn-5').addEventListener('click', function() {
        handleButtonClick('5');
    });

    document.getElementById('btn-6').addEventListener('click', function() {
        handleButtonClick('6');
    });

    document.getElementById('btn-7').addEventListener('click', function() {
        handleButtonClick('7');
    });

    document.getElementById('btn-8').addEventListener('click', function() {
        handleButtonClick('8');
    });

    document.getElementById('btn-9').addEventListener('click', function() {
        handleButtonClick('9');
    });

    document.getElementById('btn-dot').addEventListener('click', function() {
        if (!currentExpression.includes('.')) {
            handleButtonClick('.');
        }
    });
});
