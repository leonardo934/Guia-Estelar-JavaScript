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


let subject

function createThink() {
    subject = 'study'
}

console.log(subject)
createThink()
console.log(subject)


sayMyName()

function sayMyName() {
    console.log('Leonardo')
}


const SayMyName = (name) => {
    console.log(name)
}

SayMyName('Leonardo')




function SAyMyName(name) {
    console.log('antes de executar a funcao callback')

    name()

    console.log('depois de executar a callback')
}

SAyMyName(
    () => {
        console.log('estou em uma callback')
    }
)

