// Завдання1
let userLogin = prompt('Enter you login');
let userPassword = prompt('Enter your password');

console.log('Login: ' + userLogin);
console.log('Passsword: ' + userPassword);

if(( userLogin == 'admin' || userLogin == 'Admin' || userLogin == 'ADMIN') && userPassword == 12345){
    alert('Welcome!');
}
else{
    alert('Wrong login or password. Please try again');
}

// Завдання2

let userAge = prompt('Enter your age');

Age = userAge >= 18 ? true : false;
console.log(Age);

// Завдання3
weekDay = prompt('What day of the week is today?');

switch(weekDay){
    case 'Tuesday':
    case 'tuesday':
    case 'вівторок':
    case 'Вівторок':
    case 'Thursday':
    case 'thursday':
    case 'Четвер':
    case 'четвер':
        console.log(`Today is a ${weekDay} , you are have lessson at 19:00`);
        alert(`Today is a ${weekDay} , you are have lessson at 19:00`);
        break;
    default:
    console.log(`Today is a ${weekDay}. Have a nice day!`);
    alert(`Today is a ${weekDay}. Have a nice day!`);
}





