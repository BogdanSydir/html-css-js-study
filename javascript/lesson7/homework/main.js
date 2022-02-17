// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone) {
    this['id'] = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let usersArr = [
    new User(10, 'vasya', 'pupkin', 'vasya.pupkin@gmail.com', '380933222323'),
    new User(9, 'petya', 'vasin', 'petya.vasin@gmail.com', '380934565463'),
    new User(8, 'olena', 'golovach', 'olena.golovach@gmail.com', '380933222323'),
    new User(7, 'kokos', 'abrikos', '2sad@gmail.com', '380933222323'),
    new User(6, 'banan', 'mandarin', 'vasdasf@gmail.com', '380933222323'),
    new User(5, 'persik', 'aaaaaaa', 'rtytrya@gmail.com', '380933222323'),
    new User(4, 'help', 'i', 'vbfgn@gmail.com', '380933222323'),
    new User(3, 'cant', 'do', 'pupkin@gmail.com', '380933222323'),
    new User(2, 'this', 'any', 'vasya@gmail.com', '380933222323'),
    new User(1, 'moooo', 'reeee', 'vasyapupkin@gmail.com', '380933222323'),
];
console.log(usersArr)

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
usersArr.filter(user => {
    if (user.id % 2 === 0) {
        console.log(user)
    }
})

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
usersArr.sort((current, next) => current.id - next.id)
console.log(usersArr)

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(id, name, surname, email, phone, order) {
        this['id'] = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

// створити пустий масив, наповнити його 10 об'єктами Client

let client1 = new Client(3, 'Liga', 'Giga', 'sg@gmail.com', 30680000001, ['book', 'game', 'ps4']);
let client2 = new Client(1, 'Smeha', 'Rony', 'oli@gmail.com', 30680000002, ['magasine', 'shop', 'ps3']);
let client3 = new Client(2, 'Zipko', 'Tevez', 'zeru@gmail.com', 30680000003, ['football', 'ps5']);
let client4 = new Client(10, 'Zipko', 'Tevez', 'zeru@gmail.com', 30680000003, ['football', 'ps5']);
let client5 = new Client(5, 'Study', 'Olivie', 'kosmos@gmail.com', 30680000004, ['hobbis']);
let client6 = new Client(4, 'Liga', 'Giga', 'sg@gmail.com', 30680000001, ['book', 'game', 'ps4']);
let client7 = new Client(8, 'Smeha', 'Rony', 'oli@gmail.com', 30680000002, ['magasine', 'shop', 'ps3']);
let client8 = new Client(7, 'Zipko', 'Tevez', 'zeru@gmail.com', 30680000003, ['football', 'ps5']);
let client9 = new Client(9, 'Zipko', 'Tevez', 'zeru@gmail.com', 30680000003, ['football', 'ps5']);
let client10 = new Client(6, 'Study', 'Olivie', 'kosmos@gmail.com', 30680000004, ['hobbis']);

let clientArr = [client1, client2, client3, client4, client5, client6, client7, client8, client9, client10]


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log(clientArr.sort((current, next) => current.order.length - next.order.length));
