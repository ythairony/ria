// Faça um programa que calcule o fatorial de um número inteiro fornecido pelo usuário.
// Exemplo: 5!= 5*4*3*2*1=120


let num = 6
let fat = 1

while (num > 0) {
    fat = fat * num
    num--
}

console.log(parseInt(fat))