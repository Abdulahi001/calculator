let input = document.getElementById('input')
let clear = document.getElementById('clear');

clear.addEventListener('click', () => {
    input.innerHTML = ''
})

function mainFunc(value) {
    input.innerHTML += value;
}

function calculate() {

    try {
        let result = eval(input.innerHTML);
        input.innerHTML = result.toFixed(2)
    } catch {
        input.innerHTML = 'Error'
    }
 
}

function percent() {
    try{
        input.innerHTML = input.innerHTML / 100;
    } catch{
        input.innerHTML = 'Error'
    }
    
}

