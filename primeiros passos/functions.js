let total = 0


const sum = function (number1, number2) {
    total = number1 + number2
    return total
}


let number1 = 234
let number2 = 432

console.log(`a some é ${sum(number1, number2)}`)
console.log(number1, number2)




function fazerSuco(fruta1, fruta2) {
    return'suco de: ' + fruta1 + ' ' + fruta2
}

const copo = fazerSuco('Maçã', 'Banana')

console.log(copo)