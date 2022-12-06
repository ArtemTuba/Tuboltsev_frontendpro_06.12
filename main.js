let operation = prompt('Яку операцію калькуляції вам потрібно зробити? Додаваня - add; Віднімання - sub; Множення - mult; Ділення - div:');
operation = operation.toLowerCase();
console.log(operation);

const firstNum = parseInt(prompt('Введіть перше число!'));
console.log(firstNum);
const secondNum = parseInt(prompt('Введіть друге число!'));
console.log(secondNum);

if(operation === 'add') {
    alert(`"${firstNum} + ${secondNum} = ${firstNum + secondNum}"`);
    console.log(firstNum + secondNum);
} else if(operation === 'sub'){
    alert(`"${firstNum} - ${secondNum} = ${firstNum - secondNum}"`);
    console.log(firstNum - secondNum);
} else if(operation === 'mult'){
    alert(`"${firstNum} * ${secondNum} = ${firstNum * secondNum}"`);
    console.log(firstNum * secondNum);
} else if(operation === 'div'){
    alert(`"${firstNum} / ${secondNum} = ${firstNum / secondNum}"`);
    console.log(firstNum / secondNum);
} else {
    alert('Спробуйте ще раз вірно ввести операцію калькуляції!');
}