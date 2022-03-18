setTimeout(() => {
    let counter = 1
    console.log(counter, 'я прокинувся')
    setTimeout(() => {
        counter++
        console.log(counter, 'я умився')
        setTimeout(() => {
            counter++
            console.log(counter, 'я почистив зуби')
            setTimeout(() => {
                counter++
                console.log(counter, 'я поснідав')
                setTimeout(() => {
                    counter++
                    console.log(counter, 'я пішов на пари')
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)

function timeoutFN(counter, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            counter++
            resolve(counter)
        }, delay)
    })
}

timeoutFN(0, 6000)
    .then(counter => {
        console.log('я прокинувся', counter)
        return timeoutFN(counter, 1000)
    })
    .then(counter => {
        console.log('я умився', counter)
        return timeoutFN(counter, 1000)
    })
    .then(counter => {
        console.log('я почистив зуби', counter)
        return timeoutFN(counter, 1000)
    })
    .then(counter => {
        console.log('я поснідав', counter)
        return timeoutFN(counter, 1000)
    })
    .then(counter => {
        console.log('я пішов на пари', counter)
        return timeoutFN(counter, 1000)
    })