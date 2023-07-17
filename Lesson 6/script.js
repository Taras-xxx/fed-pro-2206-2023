//завдання 1
let userSelect = prompt('камінь, ножиці, папір');
function checkResult(userChoice, randomChoice) {
    let result = (userChoice === 'камінь' && randomChoice === 'ножиці') ||
        (userChoice === 'ножиці' && randomChoice === 'папір') ||
        (userChoice === 'папір' && randomChoice === 'камінь')
    return result;
}

function game(userData){
    let gameOptions = ['камінь', 'ножиці', 'папір'];
    let randomChoice = gameOptions[Math.floor(Math.random()*3)];
    let userChoice = userData.toLowerCase();
    if(userChoice === randomChoice) {
        return 'Hiчия'; 
    }
    else if (checkResult(userChoice, randomChoice)){
        return 'Ви виграли!';
    }
    else{
        return 'Ви програли, спробуйте ще!';
    }
}
console.log(game('Камінь'));
console.log(game('ножиці'));
console.log(game('папір'));
console.log(game(userSelect));


//завдання 2
function convertYear(year){
    return Math.ceil(year/100);
}
console.log(convertYear(1810));
console.log(convertYear(1700));
console.log(convertYear(1700));
console.log(convertYear(2000));


