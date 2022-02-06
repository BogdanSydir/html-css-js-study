let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
i = 0;
while (i < array.length) {
    document.write(array[i], `</br>`)
    i++;
}

document.write(`</br></br>`)

for (i = 0; i < array.length; i++) {
    document.write(array[i], `</br>`)
}

document.write(`</br></br>`)

i = 0;
while (i < array.length) {
    if (i % 2 === 1) {
        document.write(array[i], `</br>`)
    }
    i++;
}

document.write(`</br></br>`)

for (i = 0; i < array.length; i++){
    if (i % 2 === 1){
        document.write(array[i], `</br>`)
    }
}

document.write(`</br></br>`)

i = 0;
while (i < array.length) {
    if (array[i] % 2 === 0) {
        document.write(array[i], `</br>`)
    }
    i++;
}

document.write(`</br></br>`)

for (i = 0; i < array.length; i++){
    if (array[i] % 2 === 0){
        document.write(array[i], `</br>`)
    }
}

document.write(`</br></br>`)

for (i = 0; i < array.length; i++){
    if (array[i] % 3 === 0){
        array[i] = 'okten'
    }
    document.write(array[i], `</br>`)
}

document.write(`</br></br>`)

for (i = array.length - 1; i >= 0; i--){
    document.write(array[i], `</br>`)
}

document.write(`</br></br>`)

let array2 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
i = array2.length - 1;
while (i >= 0){
    document.write(array2[i], `</br>`)
    i--;
}

document.write(`</br></br>`)

for (i = array2.length - 1; i >= 0; i--){
    document.write(array2[i], `</br>`)
}

document.write(`</br></br>`)

i = array2.length - 1;
while (i >= 0){
    if(i % 2 === 1) {
        document.write(array2[i], `</br>`)
    }
    i--;
}

document.write(`</br></br>`)

for (i = array2.length - 1; i >= 0; i--){
    if(i % 2 === 1) {
        document.write(array2[i], `</br>`)
    }
}

document.write(`</br></br>`)

i = array2.length - 1;
while (i >= 0){
    if(array2[i] % 2 === 0) {
        document.write(array2[i], `</br>`)
    }
    i--;
}

document.write(`</br></br>`)

for (i = array2.length - 1; i >= 0; i--){
    if(array2[i] % 2 === 0) {
        document.write(array2[i], `</br>`)
    }
}

document.write(`</br></br>`)

for (i = array2.length - 1; i >= 0; i--){
    if(array2[i] % 3 === 0) {
        array2[i] = 'okten'
    }
    document.write(array2[i], `</br>`)
}