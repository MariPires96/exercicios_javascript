/* Elabore um algoritmo que leia 10 números inteiros e armazene em um vetor. Em seguida, mostre na tela:
- Todos os elementos dos índices ímpares do vetor;
- Todos os elementos do vetor que são números pares;
- A Soma de todos os elementos do vetor;
- A Média de todos os elementos do vetor, armazenada em uma variável do tipo real. */

import readline from 'readline-sync'

let numero;
const numerosDigitados = [];
const numerosPares = [];
let elementosIndicesImpares = [];
let contadorImpar = 0;
let contadorPar = 0;
let soma = 0;
let media;

for (let i = 0; i < 10; i++) {

    numero = readline.questionInt(`Digite o ${i+1}º numero: `);
    numerosDigitados.push(numero);
    
    soma = soma + numero;

    if (numero % 2 === 0){
       contadorPar++;
       numerosPares.push(numero);
    }

    if (i % 2 !== 0) { 
    }
}

media = soma / 10;

console.log("\n ----------- RESULTADO ----------- \n");
for (let i = 1; i < 10; i += 2) {
    elementosIndicesImpares.push(numerosDigitados[i]);
}
console.log(`Os números digitados: ${numerosDigitados}`);
console.log(`Elementos nos índices ímpares: ${elementosIndicesImpares}`);
console.log(`Os números pares: ${numerosPares}`);
console.log(`A soma dos números: ${soma}`);
console.log(`A média dos números: ${media.toFixed(2)}`);