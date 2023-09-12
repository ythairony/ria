// Faça um programa JavaScript que calcule e imprima o quadrado de cada elemento do array 
// vet=[3,5,7,3,8,9,1], use as seguintes estratégias:

let vet = [3, 5, 7, 3, 8, 9, 1]
let vetFor = []

function quadrado(valor) {
    return valor*2
}

for (let i = 0; i < vet.length; i++) {
    let x = quadrado(vet[i])
    vetFor.push(x)
}

console.log(6)
// console.log(vet[1])
console.log(quadrado(3))
// console.log(quadrado(vet[i]))
// console.log(vetFor)