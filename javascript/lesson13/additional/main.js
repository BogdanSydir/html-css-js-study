// - Імітуємо наповнення інтернет магазину товарами :
// Створити форму з наступними полями :
// - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
let name = document.getElementById('form1').name
let quantity = document.getElementById('form1').quantity
let price = document.getElementById('form1').price
let image = document.getElementById('form1').image
let button1 = document.getElementById('button1')


// Зберігати товари в масив в локалсорадж. При збережені товару з форми,
// action не повинно відбуватись (preventDefault)

button1.onclick = function (e) {
    e.preventDefault()

    let item = {'Name': name.value, 'Quantity': quantity.value, 'Price': price.value, 'image': image.value}
    console.log(item)
    let items = JSON.parse(localStorage.getItem('items')) || []
    console.log(items)
    items.push(item)
    localStorage.setItem('items', JSON.stringify(items))
}

// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html,
// при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
// До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар