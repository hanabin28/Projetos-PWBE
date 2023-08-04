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
 *                  -- Operadores de Comparação --                         *
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
 *      E    |   AND   |   &&       |   V   x   V = V   |   V    x   V = V   |   *
 *      OU   |   OR    |   ||       |   V   x   F = F   |   V    x   F = V   |   *
 *   NEGAÇÃO |   NOT   |   !        |   F   x   V = V   |   F    x   V = V   |   *
 *           |         |            |   F   x   F = F   |   F    x   F = F   |   *
 ***********************************|*******************|********************|****/





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

        ////
        //Number() - Converte STRING para NÚMEROS (int ou double)
        var nota1 = Number(notaAluno1);


        ////
        //Entrada de dados - NOTA 2
        entradaDeDado.question('Digite a 2ª nota: ', function (notaAluno2){
            var nota2 = Number(notaAluno2);


            ////
            //Entrada de dados - NOTA 3
            entradaDeDado.question('Digite a 3ª nota: ', function (notaAluno3){
                var nota3 = Number(notaAluno3);


                ////
                //Entrada de dados - NOTA 4
                entradaDeDado.question('Digite a 4ª nota: ', function (notaAluno4){
                    var nota4 = Number(notaAluno4);

                    var media = (nota1 + nota2 + nota3 + nota4) / 4;



                    if (nota1 == '' || nota2 == '' || nota3 == '' || nota4 == ''){
                        console.log('ERRO: Digite TODAS as notas do aluno')
                    } else {
                        console.log()
                        console.log(`Bem vindo, ${nome}`);
                        console.log(`Sua média é: ${media}`);
                    }

                    entradaDeDado.close();

                })
            })
        })
    })
})