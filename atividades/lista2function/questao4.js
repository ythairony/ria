// Faça um programa que leia o array abaixo e pegue apenas os dois primeiros elementos. Use o método SLICE
// da classe Array.
// Vet1 = [2,4,6,2,8,9,5]

let vet1 = [2,4,6,2,8,9,5]

function twofirst(array) {
    return vet1.slice(0, 2)
}

let vetSlicado = twofirst(vet1)

console.log(vetSlicado)