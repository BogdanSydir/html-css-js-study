let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
document.write(friends.length)
if (friends.length >= 3) {
    document.write('</br>масив великий</br>')
} else {
    document.write('</br>масив маленький</br>')
}


let numb = [11, 9, 12]
document.write(numb[1])

if ((numb[0] > numb[1] && numb[0] < numb[2]) || (numb[0] > numb[2] && numb[0] < numb[1])) {
    document.write('</br>перше число є середнім')
} else if ((numb[1] > numb[0] && numb[1] < numb[2]) || (numb[1] > numb[2] && numb[1] < numb[0])) {
    document.write('</br>друге число є середнім')
} else if ((numb[2] > numb[0] && numb[2] < numb[1]) || (numb[2] > numb[1] && numb[2] < numb[0])) {
    document.write('</br>третє число є середнім')
}

let result;
a = 2;
b= 2;
(a + b < 4) ? result = '</br>Мало' : result = '</br>Багато';
document.write(result)


let number = +prompt('enter your number');
(number < 0) ? document.write('</br>число менше від 0') : (number === 0) ? document.write('</br>число дорівнює 0') : document.write('</br>число більше від 0')

