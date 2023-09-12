// Faça um Programa que a partir do array abaixo, transforme seus elementos na frase “Arrays com
// JavaScript”. Utilize o método JOIN da classe Array.
// vet1 = [‘Arrays’, ‘com’, ‘javaScript’]

let vet1 = ['Arrays', 'com', 'javaScript']

function concatenar(array) {
    return array.join(" ")
}

let concatenado = concatenar(vet1)

console.log(concatenado)