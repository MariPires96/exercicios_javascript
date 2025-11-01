// Desenvolva um algoritmo que leia 3 valores inteiros A, B e C e imprima na tela se a soma de A + B é maior, menor ou igual a C.

import readline from 'readline-sync'

let valor_a;
let valor_b;
let valor_c;
let soma = 0;

valor_a = readline.questionFloat("Digite o valor de A: ");
valor_b = readline.questionFloat("Digite o valor de B: ");
valor_c = readline.questionFloat("Digite o valor de C: ");

soma = valor_a + valor_b;


if (soma < valor_c){
    console.log("A Soma de A + B é Menor do que C");
}else if(soma === valor_c){
    console.log("A Soma de A + B é Igual a C");
}else{
    console.log("A Soma de A + B é Maior do que C");
}