const resultWindow = document.querySelector('.result')
const btns = document.querySelectorAll('.btns');
const btnReset = document.querySelector('.btn-reset');



let temporaryNumbers = "";

let temporaryArr = [];

let temporaryAction = "";

btns.forEach(element => {
    element.addEventListener('click', function () {
        if (element.dataset.btn) {
            temporaryNumbers += element.dataset.btn;
            resultWindow.innerHTML = temporaryNumbers;

        };

        if (element.dataset.action) {
            let parsed = parseInt(resultWindow.innerHTML);
            temporaryArr.push(parsed);

            if (element.dataset.action == 'plus') {
                temporaryAction = "plus"
                resultWindow.innerHTML = "+";
                temporaryNumbers = "";
            }

            if (element.dataset.action == 'minus') {
                temporaryAction = "minus";
                resultWindow.innerHTML = "-";
                temporaryNumbers = "";
            }

            if (element.dataset.action == 'multiply') {
                temporaryAction = "multiply"
                resultWindow.innerHTML = "*";
                temporaryNumbers = "";
            }

            if (element.dataset.action == 'divide') {
                temporaryAction = "divide";
                resultWindow.innerHTML = "/";
                temporaryNumbers = "";
            }
        }

        if (temporaryArr.length > 0 && element.dataset.action == 'equal') {

            if (resultWindow.innerHTML == "+" || resultWindow.innerHTML == "-" || resultWindow.innerHTML == "*" || resultWindow.innerHTML == "/") {
                alert('type a second number')
            }

            else {

                let result = operation(temporaryAction, temporaryArr[0], temporaryArr[1])
                resultWindow.innerHTML = result;

                temporaryArr = [];
                temporaryAction = "";
                temporaryNumbers = "";

            }

        }
    })
});


btnReset.addEventListener('click', function () {
    temporaryNumbers = "";

    temporaryArr = [];

    temporaryAction = "";

    resultWindow.innerHTML = 0;
})

function operation(action, number1, number2) {

    let result = 0;

    switch (action) {
        case "plus":
            result = number1 + number2;
            break;

        case "minus":
            result = number1 - number2;
            break;

        case "multiply":
            result = number1 * number2;
            break;

        case "divide":
            result = number1 / number2;
            break;
    }

    return result

}