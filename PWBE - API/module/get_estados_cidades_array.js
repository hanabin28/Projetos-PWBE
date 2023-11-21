var estadosCidades = require('./estados_cidades.js')

//
const getListaDeEstados = function(){
    let listaDeEstadosJson = {}
    let listaDeEstadosArray = []

    estadosCidades.estadosCidades.estados.forEach(function(sigla, indice){
        listaDeEstadosArray.push(estadosCidades.estadosCidades.estados[indice].sigla)
    })

    listaDeEstadosJson.uf = listaDeEstadosArray
    listaDeEstadosJson.quantidade = listaDeEstadosArray.length

    return listaDeEstadosJson
}

//
const getDadosEstado = function(siglaEstado){
    let siglaEst = String(siglaEstado)
    let dadosEstado = {}
    let status = false

    estadosCidades.estadosCidades.estados.forEach(function(estado){
        if(estado.sigla.toLowerCase().includes(siglaEst)){
            dadosEstado.uf = estado.sigla
            dadosEstado.descricao = estado.nome
            dadosEstado.capital = estado.capital
            dadosEstado.regiao = estado.regiao
            status = true
        }

    })

    if(status)
        return dadosEstado
    else
        return false
}

//
const getCapitalEstado = function(siglaEstado){
    let siglaEst = String(siglaEstado)
    let dadosCapital = {}
    let status = false

    estadosCidades.estadosCidades.estados.forEach(function(capital){
        if(capital.sigla.toLowerCase().includes(siglaEst)){
            dadosCapital.uf = capital.sigla
            dadosCapital.descricao = capital.nome
            dadosCapital.capital = capital.capital
            status = true
        }
    })

    if(status)
        return dadosCapital
    else
        return false
}

//
const getEstadosRegiao = function(regiaoEstado){
    let regiaoEst = String(regiaoEstado)

    let dadosRegiao = {}
    let estados = []
    let status = false
    
    dadosRegiao.regiao = regiaoEst


    estadosCidades.estadosCidades.estados.forEach(function(regiao){

        if(regiao.regiao.toLocaleUpperCase().includes(regiaoEst)){

            let estadoRegiao = {}
            estadoRegiao.uf = regiao.sigla
            estadoRegiao.descricao = regiao.nome

            estados.push(estadoRegiao)
            
            status = true
        }
    })

    dadosRegiao.estados = estados

    if(status)
        return dadosRegiao
    else
        return false
}

//
const getCapitalPais = function(){
    let capitaisPais = {}
    let capitalEst = []
    let status = false

    estadosCidades.estadosCidades.estados.forEach(function(capitalPais){

        if(capitalPais.capital_pais != undefined){

            let capitais = {}
            capitais.capital_atual = capitalPais.capital_pais.capital
            capitais.uf = capitalPais.sigla
            capitais.descricao = capitalPais.nome
            capitais.capital = capitalPais.capital
            capitais.regiao = capitalPais.regiao
            capitais.capital_pais_ano_inicio = capitalPais.capital_pais.ano_inicio
            capitais.capital_pais_ano_termino = capitalPais.capital_pais.ano_fim

            capitalEst.push(capitais)
            status = true
        }
    })
    capitaisPais.capitais = capitalEst
    if(status)
        return capitaisPais
    else
        return false
}

//
const getCidades = function(siglaEstado){
    let siglaEst = siglaEstado

    let cidadesArray = []
    let listaCidades = {}
    let status = false

    estadosCidades.estadosCidades.estados.forEach(function(cidades){
        if (cidades.sigla.toLowerCase().includes(siglaEst)){
            listaCidades.uf = cidades.sigla
            listaCidades.descricao = cidades.nome
            listaCidades.quantidade_cidades = cidades.cidades.length

            cidades.cidades.forEach(function(cidade){
                let cidadesNome = cidade.nome
                cidadesArray.push(cidadesNome)
            })

            status = true
        }
    })
    listaCidades.cidades = cidadesArray
    if(status)
        return listaCidades
    else
        return false
}

module.exports={
    getListaDeEstados,
    getDadosEstado,
    getCapitalEstado,
    getEstadosRegiao,
    getCapitalPais,
    getCidades
}