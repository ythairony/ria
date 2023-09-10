// Faça um Programa que leia um vetor de 4 notas, mostre as notas e a média na tela.


let notas = [9, 10, 7, 5]
let somaNotas = 0

for (let i = 0; i < 4; i++) {
    somaNotas += notas[i]
}

let media = somaNotas / 4

console.log('Notas:', notas)
// for (let i = 0; i < 4; i++) {
//     console.log(notas[i], end=" ")
// }
console.log('Média:', media)