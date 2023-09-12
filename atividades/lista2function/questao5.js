// Faça um programa que leia o array abaixo e extrai os elementos pares. Use o método FILTER da classe
// Array.
// Vet1 = [8, 3, 9, 5, 6, 12]

let vet1 = [8, 3, 9, 5, 6, 12]

function filterPares(array) {
    return vet1.filter((valor) => valor % 2 === 0)
}

let vetPares = filterPares(vet1)

console.log(vetPares)