/************************************************************************
 * Objetivo: Receber e manipular notas escolares, para calcular a média *
 * Data: 04/08/203                                                      *
 * Autor: Vitoria Azevedo                                               *
 * Versão: 1.0                                                          *
 ************************************************************************/


/*******************************************************
 *    -- Formas de criar variáveis e constantes --     *
 *  -------------------------------------------------- *
 * var -| permite criar uma variável de escopo global, *
 *      |  ou seja, irá existir em todo o projeto      *
 *  -------------------------------------------------- *
 * let -| permite criar uma variável de escopo local   *
 *      | (bloco{}), ou seja, irá existir dentro       *
 *      | daquele bloco                                *
 *  -------------------------------------------------- *
 * const -| permite criar uma constante que pode ser   *
 *        | de escopo local ou global, sempre          *
 *        | utilizamos em situações onde não haverá    *
 *        | mudança de conteúdo                        *
 *******************************************************/


/***************************************************************************
 *                    -- Operadores de Comparação --                       *
 * ----------------------------------------------------------------------- *
 *  ==  -| Comparação de conteúdos (igual a)                               *
 *          |-- Ex: 1==1(true); Ex: 1=='1'(true);                          *
 *  >   -| Menor                                                           *
 *  <   -| Maior                                                           *
 *  <=  -| Menor ou igual                                                  *
 *  >=  -| Maior ou igual                                                  *
 *  !=  -| Diferente de                                                    *
 *  === -|Comparação de conteúdos iguais e tipos de dados iguais           *
 *          |(estritamente igual) -- Ex: 1===1(true); Ex: 1==='1'(false);  *
 *  !== -| Comparação de conteúdos diferentes e tipos de dados iguais      *
 *          |-- Ex: 1!==2(true)                                            *
 *  ==! -| Comparação de conteúdos iguais e tipos de dados diferentes      *
 *          |-- Ex: 1==!'1'(true)                                          *
 ***************************************************************************/


/***********************************|*******************|********************|****
 *    -- Operadores Lógicos --      |   Lógica - E &&   |   Lógica - OU ||   |   *
 * ----------------------------------------------------------------------------- *
 *      E    |   AND   |   &&       |   V   x   V = V   |   V    x   V = V   |   *
 *      OU   |   OR    |   ||       |   V   x   F = F   |   V    x   F = V   |   *
 *   NEGAÇÃO |   NOT   |   !        |   F   x   V = V   |   F    x   V = V   |   *
 *           |         |            |   F   x   F = F   |   F    x   F = F   |   *
 ***********************************|*******************|********************|****/



/***********************************************************
 *          Conversão de STRING para número                *
 * parseInt() -> converte uma STRING para números inteiros *
 * parseFloat() -> converte uma STRING para números reais  *
 * Number() -> converte uma STRING para número inteiro ou  *
 *             |real conforme a necessidade                *
 ***********************************************************/



/**************************************************************************
 *                 Comandos e funções novas utilizadas:                   *
 * ---------------------------------------------------------------------- *
 * - isNaN() -> verificar se a variável NÃO é um número                   *
 * - isNumber() -> verificar se a variável É um número                    *
 * - Number() - Converte STRING para NÚMEROS (int ou double)              *
 * - .toUpperCase() -> converte todos os caracteres em letras MAIÚCULAS   *
 * - .toLowerCase() -> converte todos os caracteres em letras minúsculas  *
 * - .toFixed() -> permite ajustar a quantidade de casas decimais,        *
 *                 |colocando o número de casas desejadas nos parênteses  *
 * - .replace('','') -> permite substituir caracteres por outros          *
 **************************************************************************/





//Import da biblioteca para entrada de dados via teclado
var readline = require('readline');

var entradaDeDado = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

////
//Entrada de dados - NOME DO ALUNO
entradaDeDado.question('Digite o nome do aluno: ', function (nomeAluno){
    let nome = nomeAluno;

    ////
    //Entrada de dados - NOTA 1
    entradaDeDado.question('Digite a 1ª nota: ', function (notaAluno1){
        let nota1 = notaAluno1.replace(',' , '.');


        ////
        //Entrada de dados - NOTA 2
        entradaDeDado.question('Digite a 2ª nota: ', function (notaAluno2){
            let nota2 = notaAluno2.replace(',' , '.');


            ////
            //Entrada de dados - NOTA 3
            entradaDeDado.question('Digite a 3ª nota: ', function (notaAluno3){
                let nota3 = notaAluno3.replace(',' , '.');


                ////
                //Entrada de dados - NOTA 4
                entradaDeDado.question('Digite a 4ª nota: ', function (notaAluno4){
                    let nota4 = notaAluno4.replace(',' , '.');


                    ////
                    //Validação para entrada de dados vazia
                    if (nota1 == '' || nota2 == '' || nota3 == '' || nota4 == ''){

                        console.log('ERRO: Digite TODAS as notas do aluno');


                    ////
                    //Validação para entrada de dados apenas numéricos
                    } else if(isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {

                        console.log('ERRO: É obrigatório a entrada de dados somente com números');

                    ////
                    //Validação para entrada de notas apenas entre 0 e 10
                    }else if(nota1>10 || nota1<0 || nota2>10 || nota2<0 || nota3>10 || nota3<0 || nota4>10 || nota4<0){

                        console.log('ERRO: É obrigatório digitar valores apenas entre 0 e 10');

                    }else{
                        
                        var media = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4))/4;
                        console.log();
                        console.log(`Bem vindo, ${nome.toUpperCase()}`);    

                        console.log(`Sua média é: ${media.toFixed(1).replace('.' , ',')}`);

                    }

                    entradaDeDado.close();

                })
            })
        })
    })
})