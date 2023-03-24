const resultWindow = document.querySelector('.result')
const btns = document.querySelectorAll('.btns');
const btnReset = document.querySelector('.btn-reset');

const emptyTab = [];
let actualNum = "";


btns.forEach(element => {


    element.addEventListener('click', function () {
        if (element.dataset.btn && emptyTab.length == 0) {
            actualNum += element.dataset.btn;
            resultWindow.innerHTML = actualNum
        };

        if (element.dataset.action) {
            emptyTab.push(actualNum);
            actualNum = element.dataset.action;
            emptyTab.push(actualNum)
            actualNum = "";
        }

        if (element.dataset.btn && emptyTab.length > 0) {
            actualNum += element.dataset.btn;
            resultWindow.innerHTML = actualNum
        };

        if (element.dataset.equal) {
            emptyTab.push(actualNum);

            // let resultTab = emptyTab.map(function(element) {
            //     if (element == "+" || element == "-" || element == "*" || element == "/") {
            //         return element
            //     }
            //     else {
            //         return parseInt(element)
            //     }
            // })





            // console.log(resultTab)




            // emptyTab.forEach(element => {
            //     console.log(element)
            // });

            let result = emptyTab.join(" ");

            console.log(result)

            const replaced = result.replace(/[0-9]/g, '!');
            console.log(replaced); 

        }


    })
});

