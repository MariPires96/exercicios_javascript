//Com base na tabela, escreva um algoritmo que leia o código de um item (número inteiro entre 1 e 6) e a quantidade comprada deste item (número inteiro). A seguir, mostre na tela o valor total da conta e o nome do produto que foi comprado.


import readline from 'readline-sync'

let codigo, quantidade;
let nomeProduto, precoUnitario, valorTotal;

codigo = readline.questionInt("Código do Produto: ");
quantidade = readline.questionInt("Quantidade: ");

switch (codigo) {
    case 1:
        nomeProduto = "Cachorro Quente";
        precoUnitario = 10.00;
        break;
    case 2:
        nomeProduto = "X-Salada";
        precoUnitario = 15.00;
        break;
    case 3:
        nomeProduto = "X-Bacon";
        precoUnitario = 18.00;
        break;
    case 4:
        nomeProduto = "Bauru";
        precoUnitario = 12.00;
        break;
    case 5:
        nomeProduto = "Refrigerante";
        precoUnitario = 8.00;
        break;
    case 6:
        nomeProduto = "Suco de Laranja";
        precoUnitario = 13.00;
        break;
    default:
        console.log("ERRO: Código de produto inválido.");
        nomeProduto = "Produto Inválido";
        precoUnitario = 0;
}

valorTotal = quantidade * precoUnitario;    

if (precoUnitario > 0) {
    console.log(`Produto: ${nomeProduto}`);
    console.log(`Valor total: R$ ${valorTotal.toFixed(2)}`); 
}
