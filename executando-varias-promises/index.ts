function asyncSum(a: number, b: number) {
    return new Promise((resolve, reject) => {
        if (typeof a !== 'number' || typeof b !== 'number') {
            reject('arguments must be of type number')
        } else {
            resolve(a + b)
        }
    })
}

function asyncSubtract(a: number, b: number | string) {
    return new Promise((resolve, reject) => {
        if (typeof a !== 'number' || typeof b !== 'number') {
            reject('arguments must be of type number')
        } else {
            resolve(a - b)
        }
    })
}

const sumResult = asyncSum(50, 33)
const subtractResult = asyncSubtract(50, 1)

Promise.all([sumResult, subtractResult]).then(results => {
    console.log(results)
}).catch(err => {
    console.log(err)
})