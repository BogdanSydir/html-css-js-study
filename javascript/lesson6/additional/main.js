// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
let str = 'наслаждение'
let cutstring = (str, lenght) => {
    let emptyArr = []
    for (i = 0; i < str.length; i += lenght) {
        emptyArr.push(str.substring(i, i + lenght))

    }
    return emptyArr
}
console.log(cutstring(str, 4))

// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика,
// крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
let mail1 = 'someemail@gmail.com'
let mail2 = 'someeMAIL@gmail.com'
let mail3 = 'someeMAIL@i.ua'
let mail4 = 'some.email@gmail.com'

let validator = (mail) => {
    let dogIndex = mail.indexOf('@')

    let dotIndex = mail.lastIndexOf('.')

    let valTextBeforeDog = mail.substring(0, dogIndex)

    let valTextBeforeDot = mail.substring(dogIndex + 1, dotIndex)

    if (valTextBeforeDog && dotIndex && valTextBeforeDot.length > 2) {
        console.log('email is correct')
    } else {
        console.log('email is incorrect')
    }
    return mail
}
console.log(validator(mail4));
// - є масив
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
coursesArray.sort((current, next) => {
    return next.modules.length - current.modules.length
})
console.log(coursesArray)

// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
let symb = "о", str2 = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5
let fnSplit = (str, symb) => {
    let counter = 0
    str.split('').forEach(function (symbols) {
        if (symbols === symb)
            counter = counter + 1
    })
    return counter
}
console.log(fnSplit(str2, symb))

// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
let str3 = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'

let cutstring2 = (str, length) => {
    return str.split(' ', length).join(' ')
}
console.log(cutstring2(str3, 4))
