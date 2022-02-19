//
// - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"
let content = document.getElementById('content').innerText;
console.log(content);

// -- отримує текст з блоку з id "rules"
let rules = document.getElementById('rules').innerText;
console.log(rules);

// -- замініть текст параграфа з id 'content' на будь-який інший
let contentChange = document.getElementById('content').innerText = 'lorem ipsum';
console.log(contentChange);

// -- замініть текст параграфа з id 'rules' на будь-який інший
let rulesChange = document.getElementById('rules').innerText = 'lorem ipsum dolor';
console.log(rulesChange);

// -- змініть кожному елементу колір фону на червоний
let bodyTags = document.body.children;
for (let tag of bodyTags) {
    tag.style.background = 'red'
}

// -- змініть кожному елементу колір тексту на синій
for (let tag of bodyTags) {
    tag.style.background = 'blue'
}
// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
let rulesClasses = document.getElementById('rules').classList;
console.log(rulesClasses)
// -- поміняти колір тексту у всіх елементів fc_rules на червоний
let fc_rules = document.getElementsByClassName('fc_rules');
for (let rule of fc_rules) {
    rule.style.background = 'red'
}