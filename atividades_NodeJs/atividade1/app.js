/**********************************************************************
 * Objetivo: criar um sistema que faça o calculo do IMC de uma pessoa *
 * Data: 15/09/2023                                                   *
 * Autor: Vitoria Azevedo da Cruz                                     *
 * Versão: 1.0                                                        *
 **********************************************************************/

var calcImc = require('./modulo/calculadoraImc');

var readline = require('readline');

var entradaDeDados = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})


entradaDeDados.question('Digite seu peso: ', function(valorPeso){
    let peso = valorPeso;

    entradaDeDados.question('Digite sua altura: ', function(valorAltura){
        let altura = valorAltura;

        calcImc.calculoImc(peso,altura);
        calcImc.verificarImc(peso,altura);
        entradaDeDados.close();
    })
})