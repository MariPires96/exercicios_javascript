// Leia quatro valores (n1, n2, n3, n4). A seguir, calcule e mostre a diferença do produto entre o n1 e n2 pelo produto entre o n3 e o n4.

import readline from 'readline-sync'

let n1;
let n2;
let n3;
let n4;
let dif = 0;

n1 = readline.questionFloat ("Digite o valor do primeiro numero: ");
n2 = readline.questionFloat ("Digite o valor do segundo numero: ");
n3 = readline.questionFloat ("Digite o valor do terceiro numero: ");
n4 = readline.questionFloat ("Digite o valor do quarto numero: ");

dif = (n1 * n2) - (n3 * n4);

console.log("A diferença entre os número é de: ", dif.toFixed(1));

