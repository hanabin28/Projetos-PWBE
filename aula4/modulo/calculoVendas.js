function porcentagem(valorP, fPagamento){
    let valor = valorP;
    let pagamento = fPagamento;
    let valor2;
    let valorAtualizado;

    switch(pagamento){
        case "1":
            valor2 = valor * 0.08
            valorAtualizado = valor2 + valor;
            console.log(valorAtualizado);
    }


}

module.exports={
    porcentagem
}