/***************************************************************
 * Objetivo: Manipular entrada e saída de dados para o usuário *
 * Data: 04/08/2023                                            *
 * Autor: Vitoria Azevedo                                      *
 * Versão: 1.0                                                 *
 ***************************************************************/



//Import da biblioteca de entrada de dados via teclado
var readline = require('readline');


//Criando um objeto (entradaDeDados) para ser uma referência da biblioteca READLINE (interação de entrada e saída de dados)
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// Função de callBack - permite apresentar uma mensagem no terminal,
//   e captar a digitação do usuário
// Obs: O dado digitado chegará para dentro da função através do seu argumento (nomeUsuário)
entradaDeDados.question('Digite seu nome: ' , function(nomeUsuario){

    //recebe o nome digitado
    var nome = nomeUsuario;

    //exibe uma mensagem no terminal com o nome digitado
    console.log(`Bem vindo ao aplicativo ${nome}`)

});