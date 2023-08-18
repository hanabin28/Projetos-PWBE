/*******************************************************************************
 * Objetivo: Fazer uma calculadora que realize todas as operações matemáticas, *
 *           e fazer todos os tratamentos de erros                             *
 * Data: 11/08/2023                                                            *
 * Autor: Vitoria Azevedo da Cruz                                              *
 * Versão: 1.0                                                                 *
 *******************************************************************************/

var readline = require('readline');

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


////
//Início da calculadora
console.log('Bem vindo a calculadora!!')

////
//Entrada de dados - OPERAÇÃO MATEMÁTICA QUE SERÁ UTILIZADA
entradaDados.question('Qual operação você irá utilizar? [+|Soma  -|Subtração  *|Multiplicação  /|Divisão]: \n', function(operacao){
    const operacoes = operacao;


    ////
    //Entrada de Dados - PRIMEIRO NÚMERO
    entradaDados.question('Digite o primeiro número: ', function(numero1){
        let n1 = numero1.replace(',' , '.');


        ////
        //Entrada de dados - SEGUNDO NÚMERO
        entradaDados.question('Digite o segundo número: ', function(numero2){
            let n2 = numero2.replace(',' , '.');

            ////
            //V
            if(operacoes!="+" || operacoes!= "-" || operacoes!= "*" || operacoes!= "/"){

                console.log('ERRO: Digite apenas operações válidas!!');
                entradaDados.close();

            }else if(isNaN(n1) || isNaN(n2)){

                console.log('ERRO: Digite apenas números!!');
                entradaDados.close();

            }else{
                switch(operacoes){

                    ////
                    //SOMA
                    case "+":
                        const soma = Number(n1) + Number(n2);
                        console.log(`O resultado é: ${soma}`);
                        break;
    
                    
                    ////
                    //SUBTRAÇÃO
                    case "-":
                        const subtrai = Number(n1) - Number(n2);
                        console.log(`O resultado é: ${subtrai}`);
                        break;
    
    
                    ////
                    //MULTIPLICAÇÃO
                    case "*":
                        const multiplica = Number(n1) * Number(n2);
                        console.log(`O resultado é: ${multiplica}`);
                        break;
    
                        
                    ////
                    //DIVISÃO
                    case "/":
                        if(n2==0){
                            console.log('ERRO: Nenhum número é divisível por zero, \n' + '      tente novamente!')
                        }else{
                            const divide = Number(n1) / Number(n2);
                            console.log(`O resultado é: ${divide}`);
                            break;
                        }
                }
                entradaDados.close();
            }

            
        })
    })
})