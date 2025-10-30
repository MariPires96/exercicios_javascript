// Lê salário bruto, adicional noturno, horas extras e descontos de um colaborador. Depois exibe na tela o salário líquido.

import readline from 'readline-sync'

let salario_bruto;
let add_noturno;
let horas_extras;
let descont;
let salario_liq = 0;

salario_bruto = readline.questionFloat ("Digite o valor do salario bruto: ");
add_noturno = readline.questionFloat ("Digite o valor do adicional noturno: ");
horas_extras = readline.questionFloat ("Digite as horas extras: ");
descont = readline.questionFloat ("Digite o valor do desconto: ");

salario_liq = salario_bruto + add_noturno + (horas_extras *5) - descont;

console.log("O valor do salário líquido é de R$:", salario_liq.toFixed(2));
