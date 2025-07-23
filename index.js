const calculatorContainer = document.getElementsByClassName('container')[0];
const result = document.getElementsByClassName('result')[0];

calculatorContainer.addEventListener('click', (e)=>{
  if(e.target.nodeName == 'BUTTON'){
    switch (e.target.textContent){
       case 'AC':
        deleteDisplay();
        break;

       case 'DEL':
          deletOneElement();
          break;
        
       case '=':
         equal();
         break;
         
        default:
          addToDisplay(e.target.textContent); 
        


    }
  }
})

function deleteDisplay(){

  result.textContent='';
}

function deletOneElement(){
result.textContent = result.textContent.slice(0, -1);

}

function addToDisplay(value){
  result.textContent += value;
}

const add = function (a, b) {
  return a + b;
};


const subtract = function (a, b) {
  return a - b;
};

const multiply = function (a,b) {
  return a*b;
};


const power = function (a, b) {
  return Math.pow(a, b);
};
 

const factorial = function (n) {
  let product = 1;
  for (let i = n; i > 0; i--) {
  product *= i;
  }
  return product;
};


const divition = function(num1,num2){
    return num1/num2;
}

function equal(){

  const expretion = result.textContent;

  let operator;
  if(expretion.includes('+')) operator='+';
  if(expretion.includes('-')) operator='-';
  if(expretion.includes('*')) operator='*';
  if(expretion.includes('/')) operator='/';
  if(expretion.includes('^')) operator='^';
  if(expretion.includes('!')) operator='!';

  const parts = expretion.split(operator);
  const num1 = parseFloat(parts[0]);
  const num2 = parseFloat(parts[1]);

  let answer;

  switch(operator){

    case '+':
     answer= add(num1,num2);
     break;

    case '-':
      answer= subtract(num1,num2);
      break;
      
        case '*':
      answer= multiply(num1,num2);
      break;

        case '/':
      answer= divition(num1,num2);
      break;

        case '^':
      answer= power(num1,num2);
      break;
  

    case '!':
      answer= factorial(num1);
      break;

  }

  result.textContent=answer;
}