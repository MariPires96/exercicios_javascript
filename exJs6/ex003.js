// Escreva um algoritmo, que leia números inteiros via teclado, até que o número zero seja digitado. Ao final, mostre na tela a soma de todos os números digitados, que sejam positivos.

import readline from 'readline-sync'

let numero;
let contadorPositivo = 0;
let somaPositivos = 0;
const numerosDigitados = [];

do {

    numero = readline.questionInt("Digite um número (ou digite 0 para sair): ");

    if (numero !== 0){

        numerosDigitados.push(numero);

        if(numero > 0){
          contadorPositivo++;
          somaPositivos = somaPositivos + numero;
        }
    }
} while (numero !== 0);

console.log("\n ---------- RESULTADO ---------- \n");
console.log(`Soma de todos os números positivos digitados: ${somaPositivos}`);

if (numerosDigitados.length != 0) {
    console.log(`Números digitados: ${numerosDigitados}`);
}