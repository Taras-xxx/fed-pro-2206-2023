//завдання 1
window.onload = function(){
    class Car {
        constructor (model, year, brand, numberOfPurchases){
            this.model = model;
            this.year = year;
            this.brand = brand;
            this.numberOfPurchases = numberOfPurchases;
        }
    }
    
        let ford = new Car ('focus', 2021, 'Ford', 44);
        let mercedes = new Car('sls', 2022, 'Mercedes', 23);
        let bmw = new Car ('x6', 2023, 'BMW', 12);
        let opel = new Car('insignia', 2022, 'Opel', 65);
        let renault = new Car('megane', 2021, 'Renault', 42);
    
    let carsArray = [ford, mercedes, bmw, opel, renault];
    
    console.log(carsArray)
    
//завдання 2
    for (let {brand, model, numberOfPurchases} of carsArray){
        console.log(`Автомобілів ${brand} ${model} за перший квартал 2023 року було продано ${numberOfPurchases} одиниць.`)
    }

//завдання 3
    let autoplay = document.querySelector('[autoplay]');
    let elements = document.querySelectorAll('div, p');
    let listItems = document.querySelectorAll('ul.nav > li');
    let listItem = document.querySelectorAll('li:nth-child(2)');
    let FirstArray = [autoplay, listItems, listItem, elements];
    console.log(FirstArray);

//завдання 4
    let HEADER = document.querySelector('header');
    let FOOTER = document.querySelector('footer');
    let NAV = document.querySelector('nav');

    let SecondArray = [HEADER, NAV, FOOTER];
    
    SecondArray.forEach(Items => console.log(Items));

    SecondArray.forEach(newItems => newItems.innerHTML = 'New items');
}

