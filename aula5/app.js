/***********************************************************
 * Objetivo: Realizar o calculo de uma determinada tabuada *
 * Data: 01/09/2023                                        *
 * Autor: Vitoria Azevedo da Cruz                          *
 * Versão 1.0                                              *
 ***********************************************************/


//Import da biblioteca que calcula a tabuada
var calcTabuada = require('./modulo/calculoTabuada.js');
var readline = require('readline');

var entradaDeDados = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

//Entrada de dados da tabuada
entradaDeDados.question('Digite uma tabuada: ', function(valorTabuada){
    let tabuada = valorTabuada;

    //Entrada de dados do contador inicial (onde a tabuada vai começar)
    entradaDeDados.question('Digite o contador inicial: ', function(valorInicial){
        let contadorInc = valorInicial;

        //Entrada de dados do contaor final (onde a tabuada vai terminar)
        entradaDeDados.question('Digite o contador final: ', function(valorFinal){
            let contadorFin = valorFinal;

            //Chama a função da tabuada encaminhando (nos parênteses) os valores que o usuário digitou
            calcTabuada.calcularTabuada(tabuada, contadorInc, contadorFin);
        })
    })
})