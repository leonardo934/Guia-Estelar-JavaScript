let familia = {
    receitas: [333, 333, 333, 333],
    despesas: [333, 333 ,333 ,333 ,333 ,333 ]
}

function sum(array) {
    let total = 0;

for(let value of array) {
    total += value
}
return total
}


function calculadoraFluxo () {
const calculateReceitas = sum(familia.receitas)
const calculateDespesas = sum(familia.despesas)

const total = calculateReceitas - calculateDespesas

const itsOk = total >= 0

let balanceText = "negativo"

if (itsOk) {
    balanceText = "positivo"
}
console.log(`Seu saldo é ${balanceText}: ${total.toFixed(2)}R$`)


}

calculadoraFluxo()






