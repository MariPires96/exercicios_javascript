// Escreva um algoritmo, que leia 10 números inteiros via teclado e mostre na tela quantos números são pares e quantos número são ímpares. 

import readline from 'readline-sync'

let contadorPar = 0;
let contadorImpar = 0;
let numero;
let numerosDigitados = [];


for(let i = 1; i <= 10; i++){

    numero = readline.questionInt(`Digite o numero ${i}: `);
    numerosDigitados.push(numero);

    if(numero % 2 === 0){
    contadorPar++;
    } else {
    contadorImpar++;
    }
}

console.log("\n ----------- RESULTADO ----------- \n");
console.table(`Números digitados: ${numerosDigitados}`);
console.log(`Total de números pares: ${contadorPar}`);
console.log(`Total de números ímpares: ${contadorImpar}`);



