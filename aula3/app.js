/************************************************************************
 * Objetivo: Receber e manipular notas escolares, para calcular a média *
 * Data: 04/08/203                                                      *
 * Autor: Vitoria Azevedo                                               *
 * Versão: 1.0                                                          *
 ************************************************************************/


//Import da biblioteca para entrada de dados via teclado
var readline = require('readline');

var entradaDeDado = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

////
//Entrada de dados - NOME DO ALUNO
entradaDeDado.question('Digite seu nome: ' , function(nomeAluno){
    var nome = nomeAluno;

    ////
    //Entrada de dados - PRIMEIRA NOTA
    entradaDeDado.question('Digite a 1ª nota: ' , function(notaAluno1){

        ////
        //Number() - Converte STRING para NÚMEROS (int ou double)
        var nota1 = Number(notaAluno1);


        ////
        //Entrada de dados - SEGUNDA NOTA
        entradaDeDado.question('Digite a 2ª nota: ' , function(notaAluno2){
            var nota2 = Number(notaAluno2);


            ////
            //Entrada de dados - TERCEIRA NOTA
            entradaDeDado.question('Digite a 3ª nota: ' , function(notaAluno3){
                var nota3 = Number(notaAluno3);


                ////
                //Entrada de dados - QUARTA NOTA
                entradaDeDado.question('Digite a 4ª nota: ' , function(notaAluno4){
                    var nota4 = Number(notaAluno4);

                    var media = (nota1 + nota2 + nota3 + nota4)/4;

                    console.log()
                    console.log(`Bem vindo, ${nome}`);
                    console.log(`Sua média é: ${media}`);

                    if(media>6){
                        console.log(`Parabéns!! Você foi aprovado!`)
                    }else{
                        console.log(`Que pena! Você foi reprovado!`)
                    }

                    entradaDeDado.close();
                    
                })
            })
        })
    })
})