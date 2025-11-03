// Escreva um algoritmo, que leia a idade de várias pessoas (números inteiros), via teclado e mostre na tela o total de pessoas cuja idade seja menor que 21 anos e o total de pessoas cuja idade, seja maior que 50 anos. A leitura dos dados deve ser finalizada ao digitar uma idade negativa. 

import readline from 'readline-sync'

let contadorMenor21 = 0;
let contadorMaior50= 0;
let idadesDigitadas = [];
let idade;

idade = readline.questionInt("Digite a idade (ou um numero negativo para sair): ");

while(idade >= 0){

    idadesDigitadas.push(idade);

    if(idade < 21){
        contadorMenor21++;
    } else if (idade > 50) {
        contadorMaior50++;
    }

    idade = readline.questionInt("Digite a idade (ou um numero negativo para sair): ");
}

console.log("\n ---------- RESULTADO ---------- \n");
console.log(`Total de pessoas com menos de 21 anos ${contadorMenor21}`);
console.log(`Total de pessoas com mais de 50 anos ${contadorMaior50}`);

if (idadesDigitadas.length > 0) {
    console.log(`Idades lidas: ${idadesDigitadas}`);
}
