//Nos parênteses, colocar as variáveis que receberão as variáveis do arquivo pricipal
function porcentagem(valorP, fPagamento){
    let valor = valorP;
    let pagamento = fPagamento;
    let valor2;
    let valorAtualizado;


    switch(pagamento){

        ////
        //Calculo de 8% DE DESCONTO
        case "1":
            valorAtualizado = valor - (valor*0.08);
            break;

        ////
        //Calculo de 4% DE DESCONTO
        case "2":
            valorAtualizado = valor - (valor*0.04)
            break;

        ////
        //Calculo de 2 PARCELAS
        case "3":
            valorAtualizado = valor / 2;
            break;

        ////
        //Calculo de 4 PERCELAS, ACRESCIDO DE 8%
        case "4":
            valor2 = valor / 4;
            valorAtualizado = valor2 + (valor2*0.08);
            break;
    }

    ////
    //Validação para caso a variável apareça como 'undefined'
    if(valorAtualizado != undefined)
        return Number(valorAtualizado).toFixed(2);
    else
        return false;
}

////
//Exporta a função e torna ela pública para outros arquivos
module.exports={
    porcentagem
}