// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//         street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//         lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//     company: {
//         name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }
function UserCreator(id, name, username, email, street, suite, city, zipcode, lat, lng, phone, website, companyName, catchPhrase, bs) {
    this[id] = id;
    this.name = name;
    this.username = username;
    this.email = email;
    this.adress = {
        street : street,
        suite : suite,
        city : city,
        zipcode : zipcode,
        geo : {
            lat : lat,
            lng : lng
        }
    }
    this.phone = phone;
    this.website = website;
    this.company = {
        name : companyName,
        catchPhrase : catchPhrase,
        bs : bs
    }
    console.log(this)
}

let user1 = new UserCreator(1, 'Leanne Graham', 'Bret', 'Sincere@april.biz', 'Kulas Light', 'Apt. 556', 'Gwenborough', '92998-3874', '-37.3159',
    '81.1496', '1-770-736-8031 x56442', 'hildegard.org', 'Romaguera-Crona', 'Multi-layered client-server neural-net', 'harness real-time e-markets')


// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru

class TagsInfo {
    constructor(titleOfTag, action,  titleOfAttr, actionOfAttr, titleOfAttr2, actionOfAttr2) {
        this.titleOfTag = titleOfTag;
        this.action = action;
        this.attrs = [
            {attribute1 : {titleOfAttr, actionOfAttr}},
            {attribute2 : {titleOfAttr2, actionOfAttr2}}
        ]
console.log(this)
    }
}
let tagA = new TagsInfo('a', 'Тег <\a> является одним из важных элементов HTML и предназначен для создания ссылок.', 'accesskey',
    'Активация ссылки с помощью комбинации клавиш.', 'coords', 'Устанавливает координаты активной области.')
let tagDiv = new TagsInfo('div', 'Элемент <\div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.',
    'align', 'Задает выравнивание содержимого тега <\div>.', 'title', 'Добавляет всплывающую подсказку к содержимому.')
let tagH1 = new TagsInfo('h1', 'Так, тег <\h1> представляет собой наиболее важный заголовок первого уровня, а тег <h6> служит для обозначения заголовка шестого уровня и является наименее значительным.',
    'aling', 'Определяет выравнивание заголовка.', 'none', 'Также для этого тега доступны универсальные атрибуты и события.')
let tagSpan = new TagsInfo('span', 'Тег <\span> предназначен для определения строчных элементов документа. ', 'none',
    'Для этого тега доступны универсальные атрибуты и события.', undefined, undefined)
let tagInput = new TagsInfo('input', 'Тег <\input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.',
    'accept', 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.', 'accesskey', 'Активация ссылки с помощью комбинации клавиш.')
let tagForm = new TagsInfo('form', 'Связывает поле с формой по её идентификатору.', undefined,
    undefined, undefined, undefined)
let tagOption = new TagsInfo('option', 'Тег <\option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. ', 'disabled',
    'Заблокировать для доступа элемент списка.', 'label', 'Указание метки пункта списка.')
let tagSelect = new TagsInfo('select', 'Тег <\select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором.', 'autofocus',
    'Устанавливает, что список получает фокус после загрузки страницы.', 'form', 'Связывает список с формой.')
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//     action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }