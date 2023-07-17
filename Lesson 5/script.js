//завдання 1
function FilmMaker(Title, Year, Rating){
    this.title = Title,
    this.year = Year,
    this.rating = Rating
}
const film = new FilmMaker('Guy Ritchies The Covenant','2023','7.6');
console.log(film);

//завдання 2
FilmMaker.prototype.giveInfo =  function(){
    let filmInfo = `Про що фільм "Перекладач Ґая Річі / Заповіт":
    Перед завершенням своєї служби в лавах армії США в Афганістані сержант Джон Кінлі вирушає на завдання разом із невеликою командою бойових товаришів та місцевого провідника-перекладача Ахмеда. Але група потрапляє у пастку. Вижити вдається Ахмеду та Джону, який нічого не пам'ятає про той день і про те, як вижив. Він знає, що перекладач врятував йому життя і протяг його через небезпечну гірську місцевість, що кишить талібами. Три тижні родичі думали, що Джон загинув, але весь цей час Ахмед намагався доставити його в безпечне місце. І ось, перебуваючи вдома, Джон дізнається, що сім'я Ахмеда не отримала права на притулок і застрягла в Афганістані. Спонуканий почуттям провини Кінлі вирішує врятувати Ахмеда і його сім'ю для чого вирушає до Афганістану самотужки.`
    return filmInfo;
}
document.getElementById("demo").innerHTML = film.giveInfo();

// завдання 3
function FilmMakerSecond(Назва, Рік, Рейтинг){
    this.Назва = Назва,
    this.Рік = Рік,
    this.Рейтинг = Рейтинг
}
const films = [];
const filmOne = new FilmMakerSecond('Перекладач. Заповіт', '2023','7.6');
films.push(filmOne);
const filmTwo = new FilmMakerSecond('Темні часи', '2017','7.4');
films.push(filmTwo);
const filmThree = new FilmMakerSecond('Кримінальне чтиво', '1994','8.9');
films.push(filmThree);
const filmFour = new FilmMakerSecond('Джентльмени', '2020','7.8');
films.push(filmFour);
const filmFive = new FilmMakerSecond('Джанго', '2012','8.4');
films.push(filmFive);


console.log(films);

function sortPopular(films){
    films.sort((a,b)=> b.Рейтинг-a.Рейтинг)
}
sortPopular(films)

// завдання 4

function sortYear(films, year){
    return films.filter(function(films){
        return films.Рік == year;
    });
}
let filmSort = sortYear(films, 2023);

console.log(filmSort);