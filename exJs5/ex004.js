//Com base na tabela, escreva um algoritmo que simule uma Calculadora simples. O programa deverá ler dois números reais: numero1 e numero2, e na sequência ler o Código da operação matemática (número inteiro entre 1 e 4). A seguir, mostre na tela o resultado da operação entre os 2 números. Caso o número da operação esteja fora do intervalo entre 1 e 4, mostre a mensagem na tela Operação Inválida!

import readline from 'readline-sync'

let numero1, numero2, resultado, simboloOperacao;
let operacao = 0;

numero1 = readline.questionFloat("Digite o número 1: ");
numero2 = readline.questionFloat("Digite o número 2: ");
operacao = readline.questionInt("Operação (1=Soma, 2=Sub, 3=Mult, 4=Div): ");

switch (operacao) {
    case 1:
        resultado = numero1 + numero2;
        simboloOperacao = "+";
        break;
    case 2:
        resultado = numero1 - numero2;
        simboloOperacao = "-";
        break;
    case 3:
        resultado = numero1 * numero2;
        simboloOperacao = "*";
        break;
    case 4:
        if (numero2 !== 0) {
            resultado = numero1 / numero2;
            simboloOperacao = "/";
        } else {
            console.log("Erro: Divisão por zero não é permitida!");
            resultado = null; 
        }
        break;
    default:
        console.log("Operação Inválida!");
        resultado = null;
}

if (resultado !== null) {
    console.log(`${numero1.toFixed(1)} ${simboloOperacao} ${numero2.toFixed(1)} = ${resultado.toFixed(1)}`);
}
