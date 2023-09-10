// Faça um Programa que leia um vetor de 5 números inteiros, mostre a soma, a multiplicação
// e os números.

let lista = [1, 2, 3, 4, 5]
let soma = 0
let mult = 1

for (let i = 0; i < 5; i++) {
    soma += lista[i]
    mult *= lista[i]
}

console.log('Lista:', lista)
console.log('Soma total:', soma)
console.log('Multiplicação total:', mult)
