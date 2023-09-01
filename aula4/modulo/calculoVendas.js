function porcentagem(valorP, fPagamento){
    let valor = valorP;
    let pagamento = fPagamento;
    let valor2;
    let valorAtualizado;


    switch(pagamento){
        case "1":
            valorAtualizado = valor - (valor*0.08);
            break;

        case "2":
            valorAtualizado = valor - (valor*0.04)
            break;

        case "3":
            valorAtualizado = valor / 2;
            break;

        case "4":
            valor2 = valor / 4;
            valorAtualizado = valor2 + (valor2*0.08);
            break;
    }

    if(valorAtualizado != undefined)
        return Number(valorAtualizado).toFixed(2);
    else
        return false;
}

module.exports={
    porcentagem
}