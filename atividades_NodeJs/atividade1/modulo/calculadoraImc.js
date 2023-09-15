/******************************************************************
 * Objetivo: Fazer uma calculadora de IMC, que mostre o resultado *
 *            do cálculo e a classificação do IMC da pessoa       *
 * Data: 15/09/2023                                               *
 * Autor: Vitoria Azevedo da Cruz                                 *
 * Versão: 1.0                                                    *
 ******************************************************************/

const calculoImc = function(imcPeso, imcAltura){
    let peso = String(imcPeso).replace(',','.');
    let altura = String(imcAltura).replace(',','.');
    let imc;

    imc = Number(imc);
    peso = Number(peso);
    altura = Number(altura);

    imc = peso / (altura*altura);
    return imc.toFixed(2);
}

const verificarImc = function(imc){
    imc = Number(imc)

    console.log(`O seu IMC é: ${imc}`);
    let classificacao

    if(imc < 18.5){
        classificacao = console.log(`Você está abaixo do peso`)

    }else if (imc >=18.5 && imc <=24.9) {
        classificacao = console.log(`Seu peso está normal`)

    }else if (imc >= 25 && imc <= 29.9) {
        classificacao = console.log(`Você está acima do peso`)

    }else if (imc >= 30 && imc <=34.9) {
        classificacao = console.log(`Obesidade I`)

    }else if (imc >=35 && imc >= 39.9) {
        classificacao = console.log(`Obesidade II`)

    }else if (imc >40) {
        classificacao = console.log(`Obesidade III`)
    }

    return classificacao;
}

module.exports={
    calculoImc,
    verificarImc
}

