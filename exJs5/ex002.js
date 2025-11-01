// Escreva um algoritmo que leia um número inteiro via teclado e mostre na tela uma mensagem indicando se este número é par ou ímpar e se o número é positivo ou negativo.

import readline from 'readline-sync'

let numero;
let parOuImpar;
let positivoOuNegativo;

numero = readline.questionInt("Digite um número: ");

if (numero % 2 === 0) {
    parOuImpar = "par";
} else {
    parOuImpar = "ímpar";
}

if (numero > 0) {
    positivoOuNegativo = "positivo";
} else if (numero < 0) {
    positivoOuNegativo = "negativo";
} else {
    // Caso especial: o número é zero
    positivoOuNegativo = "neutro (zero)";
}

console.log(`O Número ${numero} é ${parOuImpar} e ${positivoOuNegativo}!`);
