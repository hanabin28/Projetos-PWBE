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

//Entrada de dados - NOME
entradaDeDados.question('Digite seu nome: ', function (nomeUsuario){

    //recebe o nome digitado
    var nome = nomeUsuario;

    ////
    //Entrada de dados - IDADE
    entradaDeDados.question('Digite sua idade: ', function (idadeUsuario){
        var idade = idadeUsuario;

        ////
        //Entrada de dados - TELEFONE
        entradaDeDados.question('Digite seu telefone: ', function (telefoneUsuario){
            var telefone = telefoneUsuario;

            ////
            //Entrada de dados - E-MAIL
            entradaDeDados.question('Digite seu e-mail: ', function (emailUsuario){
                var email = emailUsuario;

                ////
                //exibe uma mensagem no terminal com o nome digitado
                console.log();
                console.log(`Bem vindo ao aplicativo ${nome}`);
                console.log(`A idade informada foi: ${idade}`);
                console.log(`O telefone informado foi: ${telefone}`);
                console.log(`O e-mail informado foi: ${email}`)

            });
        });
    });
});