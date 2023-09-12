// Faça um programa JavaScript que calcule e imprima o quadrado de cada elemento do array 
// vet=[3,5,7,3,8,9,1], use as seguintes estratégias:

var vet = [3, 5, 7, 3, 8, 9, 1]
var vetFor = []
var vetForEach = []



for (let i = 0; i < vet.length; i++) {
    vetFor.push(vet[i]*vet[i])
}

// Solução com FOR simples
console.log('Solução com FOR')
console.log(vetFor)
console.log()

// Solução com FOREACH
vet.forEach((valor) => vetForEach.push(valor**2))
console.log('Solução com FOREACH')
console.log(vetForEach)
console.log()


// Solução com MAP
let vetMap = vet.map((valor) => valor ** 2)
console.log('Solução com MAP')
console.log(vetMap)


