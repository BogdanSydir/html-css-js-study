// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість,
// об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function CarCreator(model, developer, year, maxSpeed, engineVolume) {
    this.model = model;
    this.developer = developer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;
    this.drive = function () {
        console.log(`їдемо ${this.maxSpeed} на годину`);
    }
    this.info = function () {
        for (const key in this) {
            if (typeof this[key] !== 'function') {
                console.log(`${key} - ${this[key]}`)
            }
        }
    }
    this.increaseMaxSpeed = function (newSpeed) {
        console.log(this.maxSpeed = this.maxSpeed + newSpeed);
    }
    this.changeYear = function (newYear) {
        this.year = newYear
        console.log(newYear)
    }
    this.addDriver = function (driver) {
        console.log(this.driver = driver);
    }
}

let car1 = new CarCreator('cls63', 'mersedes', 2020, 250, 5.5)
car1.info() //вивід до змін

//вивід після змін
car1.increaseMaxSpeed(100)
car1.changeYear(1999)
car1.info()
car1.addDriver(['petya', 'lupkin'])

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class CarCreator2 {
    constructor(model, developer, year, maxSpeed, engineVolume) {
        this.model = model;
        this.developer = developer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    }

    drive() {
        console.log(`їдемо ${this.maxSpeed} кілометрів за годину`)
    }

    info() {
        for (const key in this) {
            if (typeof this[key] !== 'function') {
                console.log(`${key} - ${this[key]}`)
            }
        }
    }

    increaseSpeed(newSpeed) {
        console.log(this.maxSpeed = this.maxSpeed + newSpeed);
    }

    changeYear(newYear) {
        this.year = newYear
    }

    addDriver(driverInfo) {
        console.log(this.driver = driverInfo)
    }

}

let car2 = new CarCreator2('cls63', 'mersedes', 2025, 300, 6)
car2.drive()
car2.info()
car2.increaseSpeed(50)
car2.changeYear(3000)
car2.addDriver(['Vasya', 'mersedes'])


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
function Popelyushka(pName, age, footSize) {
    this.name = pName;
    this.age = age;
    this.foot = footSize;
}

let popelushkiArr = [
    new Popelyushka('Olya', 19, 35),
    new Popelyushka('Katya', 16, 34),
    new Popelyushka('Vasuluna', 20, 33),
    new Popelyushka('Yulia', 22, 32),
    new Popelyushka('Nastya', 21, 30),
    new Popelyushka('Olesya', 15, 36),
    new Popelyushka('Maria', 23, 37),
    new Popelyushka('Ira', 20, 38),
    new Popelyushka('Viktoria', 17, 39),
    new Popelyushka('Kristina', 19, 40),
];
console.log(popelushkiArr)
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
let prince = {name: 'Bogdan', age: 22, shose: 34}
console.log(prince)
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
popelushkiArr.forEach(girl => {
    if (girl.foot === prince.shose) {
        console.log(`must be ${girl.name}`)
    }
})

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
let princess = popelushkiArr.find(girl => girl.foot === prince.shose)
console.log(princess)