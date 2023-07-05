// завдання 1
let firstArray = [];
    for(let i = 0; i <= 20; i+=2){
         firstArray.push(i);
}
console.log(firstArray);

// завдання 2
let secondArray = [
    "Keep", "Remove", "Keep", "Remove", "Keep", "Keep", "Remove", "Remove"
    ];
let keepArrey =[];
    for (let i = 0; i < secondArray.length; i++) {
        if(secondArray[i] === "Keep"){
            keepArrey.push(secondArray[i]);
        }
}
console.log(keepArrey);

// завдання 3

let thirdArray = [69, 96, -66, 77, 85, -85, 14, -20, 90, -36];

for (let i =0; i< thirdArray.length; i++){
    if(thirdArray[i] < 0) {
        thirdArray[i]=0;
    }
}
console.log(thirdArray);

// завдання 4


let days = ['Понеділок','Середа','Неділя'];
let plans = ['Урок 03', 'Урок 04', 'Вихідний'];
for(let i=0; i<plans.length; i++){
  console.log(`Сьогодні (${days[i]}) у вас такі плани: ${plans[i]}`);
}
// завдання 5 калькулятор IfElse

// let firstValue = Number(prompt ('first value'));
// let action = prompt ('input action: + or - or / or *');
// let secondValue = Number(prompt('second value'));

// if(action == '+'){
//         document.write(`${firstValue} ${action} ${secondValue} = ${firstValue+secondValue}`);
//         console.log(`${firstValue} ${action} ${secondValue} = ${firstValue+secondValue}`);
//     }
// if(action == '-'){
//     document.write(`${firstValue} ${action} ${secondValue} = ${firstValue-secondValue}`);
//     console.log(`${firstValue} ${action} ${secondValue} = ${firstValue-secondValue}`);
// }
// if(action == '/'){
//     if(secondValue === 0){
//         alert(`На ${secondValue} ділити не можна!`)
//     }
//     else{
//         document.write(`${firstValue} ${action} ${secondValue} = ${firstValue/secondValue}`);
//         console.log(`${firstValue} ${action} ${secondValue} = ${firstValue/secondValue}`);
//     }
// }
// if(action == '*'){
//     document.write(`${firstValue} ${action} ${secondValue} = ${firstValue*secondValue}`);
//     console.log(`${firstValue} ${action} ${secondValue} = ${firstValue*secondValue}`);
// }

// завдання 5 калькулятор switch

let firstValue = Number(prompt ('Перше значення'));
let action = prompt ('Введіть дію: "+" або "-" або "/" або "*"');
let secondValue = Number(prompt('Другее значення'));

switch(action){
    case '+' :
        console.log(firstValue+secondValue);
        document.write(`${firstValue} ${action} ${secondValue} = ${firstValue+secondValue}`);
        break;
    case '-' :
        console.log(firstValue-secondValue);
        document.write(`${firstValue} ${action} ${secondValue} = ${firstValue-secondValue}`);
        break;
    case '*' :
        console.log(firstValue*secondValue);
        document.write(`${firstValue} ${action} ${secondValue} = ${firstValue*secondValue}`);
        break;
    case '/' :
        if(secondValue === 0){
            alert(`На ${secondValue} ділити не можна!`);
        }
        else{
            console.log(firstValue/secondValue);
        document.write(`${firstValue} ${action} ${secondValue} = ${firstValue/secondValue}`);
        }
        break;
    default:
        alert(`Ви ввели неправильне значення дії: ${action}. Введіть правильне значення`);
}







