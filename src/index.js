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
                     
            let result = emptyTab.join(" ");
            
            console.log(result)
        }


    })
});
