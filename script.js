let btns = document.querySelectorAll('.botoes button');
let expression = document.querySelector('input[type=text]');
let result = document.querySelector('.screen-result input[type=text]');

function getText(){
    expression.value += `${this.innerText}`;//expression.value, expression.placeholder , etc !
}
btns.forEach((e) => { /*add texto do botão ao input expressão */
    e.addEventListener('click',getText);
});

function calcular(n,operator){
    let result = 0;
    let op;

    result = n[0];
    //console.log(n);
    for(let i = 0; i < n.length; ++i){
        operator[i] === '+' ? result +=  n[i + 1] : result = result;
        operator[i] === '-' ? result += n[i + 1] : result = result;
        operator[i] === '/' ? result /= n[i + 1] : result = result;
        operator[i] === '*' ? result *= n[i + 1] : result = result;
        //console.log(n[i]);
    }
    return result;
}

let btn_result = document.querySelector('.result button');
btn_result.addEventListener('click', (e) => {
    let n = [],operator = [];//array num e array operator
    let numberclean1,j;
    numberclean1 = j = 0;
    
    for(let i = 0; i < expression.value.length; ++i){//255+10=
        if(isNaN(+expression.value[i])){
            operator[j] = expression.value[i];
            console.log(numberclean1);//13/10/2022 Live Insanity
            n[j] = +numberclean1.slice(1);
            //console.log(operator[j]);
            ++j;
            numberclean1 = '';//note que numberclean1 não é um number,portanto resetá-lo com 0 dara erro!!
           // console.log(numberclean1);
        }
        numberclean1 += expression.value[i];
        //console.log(numberclean1);
    }
  
    result.value = calcular(n,operator);
    //console.log(n);
    expression.value = '';
});

let clear = document.querySelector('.clear');
clear.addEventListener('click',(e) => {
    expression.value = '';
    result.value = '';
});

function typewriter(){
    let logo = document.querySelector('.logo');
    let arraylogo = logo.innerText.split('');

    logo.innerText = '';
    arraylogo.forEach((e,i) => {
        setTimeout(() => {
            logo.innerText += e;
        },200 * i);
    });
}
typewriter();