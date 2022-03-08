// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage
let form1 = document.getElementById('form1')
let btn1 = document.getElementById('btn1')

btn1.onclick = function (e) {
    e.preventDefault()
    // console.log(form1.name.value)
    // console.log(form1.age.value)
    localStorage.setItem('name', form1.name.value)
    localStorage.setItem('age', form1.age.value)
}

// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.
let model = document.getElementById('form2').model
let type = document.getElementById('form2').type
let volume = document.getElementById('form2').volume


btn2.onclick = function (e) {
    e.preventDefault()
    // let car = {'model': model.value, 'type': type.value, 'volume': volume.value}
    // let cars = localStorage.getItem('cars')
    //
    // if (!cars) {
    //     let cars = []
    //     cars.push(car)
    //     localStorage.setItem('cars', JSON.stringify(cars))
    //
    //     console.log(cars)
    // } else {
    //     let carsArray = JSON.parse(cars)
    //     carsArray.push(car)
    //     localStorage.setItem('cars', JSON.stringify(carsArray))
    // }

    let car = {'model': model.value, 'type': type.value, 'volume': volume.value}
    let cars = JSON.parse(localStorage.getItem('cars')) || []
    cars.push(car)
    localStorage.setItem('cars', JSON.stringify(cars))
}
