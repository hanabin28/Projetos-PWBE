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

//Entrada de dados para o PESO
entradaDeDados.question('Digite seu peso: ', function(valorPeso){
    let peso = valorPeso;

    //Entrada de dados para a ALTURA
    entradaDeDados.question('Digite sua altura: ', function(valorAltura){
        let altura = valorAltura;
        let imprimir;
        imprimir = calcImc.calculoImc(peso,altura);

        calcImc.calculoImc(peso,altura);
        console.log(`Seu imc é: ${imprimir.toFixed(2)}`)
        calcImc.verificarImc(calcImc.calculoImc(peso,altura));

        entradaDeDados.close();
    })
})