/***********************************************************
 * Objetivo: Arquivo de funções para calcular uma tabuada  *
 * Data: 01/09/2023                                        *
 * Autor: Vitoria Azevedo da Cruz                          *
 * Versão 1.0                                              *
 ***********************************************************/

/****************************************
 *  Trocando os valores das variáveis:  *
 * ------------------------------------ *
 * Usando os argumentos:                *
 *  |-> contFinal = contadorInicial;    *
 *      contInicial = contadorFinal;    *
 * ------------------------------------ *
 * Usando uma variável auxiliar:        *
 *  |-> let valorAuxiliar;              *
 *      valorAuxiliar = contInicial;    *
 *      contInicial = contFinal;        *
 *      contFinal = valorAuxiliar;      *
 ****************************************/


////
//Função para calcular tabuada (outra forma de criar funções - a mais usada atualmente)
const calcularTabuada = function(valorTabuada, contadorInicial, contadorFinal){

    ////
    //Entrada de dados que chegam pelos argumentos - '()'
    let tabuada = String(valorTabuada).replace(',' , '.');
    let contInicial = String(contadorInicial).replace(',' , '.');
    let contFinal = String(contadorFinal).replace(',' , '.');

    let resultado;
    let status = false;
    ////
    //Validação para o quando o 'contFinal' for menor que o 'contInicial' - trocando os valores das variáveis
    if(contFinal<contInicial){
        ////
        //Usando os argumentos:
        contFinal = contadorInicial;
        contInicial = contadorFinal;
    }

    if(tabuada == '' || contInicial == '' || contFinal == '')
        console.log('ERRO: É obrigatório a entrada de todos os valores')
    else if(isNaN(tabuada) || isNaN(contInicial) || isNaN(contFinal))
        console.log('ERRO: É obrigatório a entrada somente de números')
    else{
        ////
        //Convertendo as variáveis em número
        contInicial = Number(contInicial);
        contFinal = Number(contFinal);
        tabuada = Number(tabuada);

        //Exemplo usando WHILE
       while(contInicial<=contFinal){
        resultado = tabuada * contInicial;
        console.log(`${tabuada} X ${contInicial} = ${resultado}`);
        contInicial++;
        status=true;
        }
    }
    return status;
}

console.log(calcularTabuada(0, 0, 0));