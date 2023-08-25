
function calculadora(numero1, numero2, tipoCalculo){
    let n1 = numero1;
    let n2 = numero2;
    let operacao = tipoCalculo;
    let resultado;


    switch(operacao){

        ////
        //SOMA
        case "+":
            resultado = n1 + n2;
            break;

        
        ////
        //SUBTRAÇÃO
        case "-":
            resultado = n1 - n2;
            break;


        ////
        //MULTIPLICAÇÃO
        case "*":
            resultado = n1 * n2;
            break;

            
        ////
        //DIVISÃO
        case "/":

            ////
            //Validação da entrada de dados de 0 no SEGUNDO NÚMERO
            if(n2==0)
                console.log('ERRO: Nenhum número é divisível por zero, \n' + '      tente novamente!')
            else{
                resultado = n1 / n2;
                break;
            }
            break;
    }
    
    if(resultado != undefined)
        return Number(resultado).toFixed(2);
    else
        return false;

}

////
//Permite tornar uma função pública para outros projetos
module.exports={
    calculadora
}