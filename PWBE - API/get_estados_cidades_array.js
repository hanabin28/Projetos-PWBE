var estadosCidades = require('./module/estados_cidades.js')

const getListaDeEstados = function(){
    let listaDeEstadosJson = {}
    let listaDeEstadosArray = []

    estadosCidades.estadosCidades.estados.forEach(function(sigla, indice){
        listaDeEstadosArray.push(estadosCidades.estadosCidades.estados[indice].sigla)
    })

    listaDeEstadosJson.uf = listaDeEstadosArray
    listaDeEstadosJson.quantidade = listaDeEstadosArray.length

    console.log(listaDeEstadosJson)
    return listaDeEstadosJson
}

getListaDeEstados()