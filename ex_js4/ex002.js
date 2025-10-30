// Lê 4 notas e mostra a média final

import readline from 'readline-sync'

let nota_1;
let nota_2;
let nota_3;
let nota_4;
let media = 0;

nota_1 = readline.questionFloat ("Digite a nota 1: ");
nota_2 = readline.questionFloat ("Digite a nota 2: ");
nota_3 = readline.questionFloat ("Digite a nota 3: ");
nota_4 = readline.questionFloat ("Digite a nota 4: ");

media = (nota_1 + nota_2 + nota_3 + nota_4) / 4

console.log("O valor da média é: ", media.toFixed(1));