/*******************************************************************************
 * Objetivo: Fazer uma calculadora que realize todas as operações matemáticas, *
 *           e fazer todos os tratamentos de erros                             *
 * Data: 11/08/2023                                                            *
 * Autor: Vitoria Azevedo da Cruz                                              *
 * Versão: 1.0                                                                 *
*******************************************************************************/

/***********************************
 *    Validação do UNDEFINED       *
 *  |if(resultado!=undefined)      *
 *      |console.log('resultado'); *
 ***********************************/



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
            n1 = Number(n1);
            n2 = Number(n2);


            ////
            //Validação da entrada apenas das OPERAÇÕES VÁLIDAS
            if(operacoes!="+" && operacoes!= "-" && operacoes!= "*" && operacoes!= "/")
                console.log('ERRO: Digite apenas operações válidas!!');

             ////
             //Validação da entrada de dados VAZIA
            else if(n1=='' || n2=='')
                console.log('ERRO: É obrigatório inserir os valores!!');

            ////
            //Validação da entrada apenas de NÚMEROS
            else if(isNaN(n1) || isNaN(n2))
                console.log('ERRO: Digite apenas números!!')

            ////
            //Validação das OPERAÇÕES
            else{
                switch(operacoes){

                    ////
                    //SOMA
                    case "+":
                        const soma= n1 + n2;
                        console.log(`O resultado é: ${soma}`);
                        break;
    
                    
                    ////
                    //SUBTRAÇÃO
                    case "-":
                        const subtrai = n1 - n2;
                        console.log(`O resultado é: ${subtrai}`);
                        break;
    
    
                    ////
                    //MULTIPLICAÇÃO
                    case "*":
                        const multiplica = n1 * n2;
                        console.log(`O resultado é: ${multiplica}`);
                        break;
    
                        
                    ////
                    //DIVISÃO
                    case "/":

                        ////
                        //Validação da entrada de dados de 0 no SEGUNDO NÚMERO
                        if(n2==0)
                            console.log('ERRO: Nenhum número é divisível por zero, \n' + '      tente novamente!')
                        else{
                            const divide = n1 / n2;
                            console.log(`O resultado é: ${divide}`);
                            break;
                        }
                }
                entradaDados.close();
            }
            

        })
    })
})