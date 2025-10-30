import readline from 'readline-sync'

let salario;
let abono;
let novo_salario = 0;

salario = readline.questionFloat ("Digite o valor do salario: ");
abono = readline.questionFloat ("Digite o valor do abono: ");

novo_salario = salario + abono;

console.log("O valor do novo salário será de R$", novo_salario.toFixed(2));