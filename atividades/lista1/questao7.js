// Faça um Programa que leia um vetor de 5 números inteiros e armazene-os num vetor.
// Armazene os números pares no vetor PAR e os números ÍMPARES no vetor ímpar. Imprima os
// três vetores.

let lista = [1, 2, 3, 4, 5]
let par = []
let impar = []

for (let i = 0; i < 5; i++) {
    if (lista[i] % 2 === 0) {
        par.push(lista[i])
    } else {
        impar.push(lista[i])
    }
}


console.log('Lista:', lista)
console.log('Pares:', par)
console.log('Ímpares:', impar)