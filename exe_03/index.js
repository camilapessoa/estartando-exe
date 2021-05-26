//3 - As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia, e R$ 1,00 se forem compradas pelo menos 12. Escreva um programa que leia o número de maçãs compradas, calcule e escreva o custo total da compra.

const rl = require('readline-sync')

const qtdeMacas = parseFloat(rl.question("Quantas maçãs você deseja?"))

if (qtdeMacas >= 12) {
  const valorPromo = qtdeMacas * 1.00


  console.log(`A quantidade de maçãs é ${qtdeMacas} e  valor total da compra é R$ ${valorPromo}`)
} else {
  const valorMenosMacas = qtdeMacas * 1.30
  console.log(`A quantidade de maçãs é ${qtdeMacas} e o valor total da compra é R$ ${valorMenosMacas}`)



}

//ou

CalcularValorMaca = (maca) => {
  if (maca >= 12) {
    return maca * 1.00
  } else {
    return maca * 1.30
  }

}

console.log(CalcularValorMaca(12))
//console.log(CalcularValorMaca(10))
