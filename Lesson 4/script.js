//завдання 1
let animalsArray = ['cat', 'cow', 'fish', 'chicken', 'dog', 'pig'];

function getFn(element, argument) {
    if (element == "first") {
        console.log(argument[0]);
    }
    else if (element == "last") {
        console.log(argument[argument.length - 1]);
        }
    else{
        console.log('Try "first" or "last"');
    }
}
getFn("last", animalsArray);
getFn("first", animalsArray);
getFn('second', animalsArray);

// console.log (firstValue);  
// console.log (lastValue);

// завдання 2

let smile = [':)', '=)',':)', '=)',':)', '=)'];

function changeSmile(newSmile){
    for(i = 0; i<smile.length; i++){
        if(smile[i]==':)'){
            smile[i]=newSmile;
        }
    }
    console.log(smile);
}

changeSmile(':=|');
