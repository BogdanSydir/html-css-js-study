// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль
let classNamesArr = []

function scrapper(startElement) {

    for (let classChild of startElement.classList) {
        if (classNamesArr.indexOf(classChild) === -1){
        classNamesArr.push(classChild)
        }
    }

    let children = startElement.children;
    for (let child of children) {
        scrapper(child)
    }
}
scrapper(document.body)

console.log(classNamesArr)

