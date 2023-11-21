/*********************************************************************
 * Objetivo: Criar uma API para responder dados de Estados e Cidades *
 * Data: 10/11/2023                                                  *
 * Autor: Vitoria Azevedo                                            *
 * Versão: 1.0                                                       *
 *********************************************************************/

/******************************************************************************************
 * Instalações das dependências para criação da API:                                      *
 *     - express (npm install express --save)                                             *
 *        |Dependência do node para auxiliar na criaçao de API                            *
 *                                                                                        *
 *     - cors (npm install cors --save)                                                   *
 *        |Dependência para manipular recursos de acesso, permissões, etc da API (HEADER) *
 *                                                                                        *
 *     - body-parser (npm install body-parser --save)                                     *
 *        |Dependência para auxiliar na chegada de dados na API (BODY)                    *
 ******************************************************************************************/

//Import das bibliotecas do projeto
const express = require('express')
const cors = require('cors')
const bodyParse = require('body-parser')
const controleFuncoes = require('./module/get_estados_cidades_array')

//Cria um objeto app tendo como referência a classe express
const app = express()

//request - Receber dados
//responde - Devolve dados

//Função para configurar as premissões do cors 
app.use((request, response, next)=>{
    //Configura quem poderá fazer requisições na API (* - libera para todos | IP - restringe o acesso)
    response.header('Access-Control-Allow-Origin', '*')

    //Configura os métodos que poderão ser usados na API (GET, POST, PUT e DELETE)
    response.header('Access-Control-Allow-Methods', 'GET')

    app.use(cors())

    next()
})


//EndPoint 1: Listar a sigla de todos os estados
app.get('/estados/sigla', cors(), async function(request, response, next){
    
    let estados = controleFuncoes.getListaDeEstados()

    response.json(estados)
    response.status(200)
})

//EndPoint 2: Retorna os dados do estado, filtrando pela sigla
app.get('/estado/sigla/:uf', cors(), async function(request, response, next){

    //Recebe uma variavel encaminhada por parâmetro na URL da requisição (:uf -> o ':' indica que é uma variavel, é tratada como parâmetro )
    let siglaEstado = request.params.uf

    let dadosEstado = controleFuncoes.getDadosEstado(siglaEstado)

    if (dadosEstado) {
        response.json(dadosEstado)
        response.status(200)
    }else{
        response.json({erro: "Não foi possível encontrar um item"})
        response.status(404)
    }
})

//EndPoint 3: Retorna os dados da Capital, filtrando pela sigla
app.get('/capital/estado', cors(), async function(request, response, next){

    //Recebe parâmetros via query, são variaveis que são encaminhadas na URL da requisição (?uf=SP)
    let siglaEstado = request.query.uf

    let dadosCapital = controleFuncoes.getCapitalEstado(siglaEstado)

    if (dadosCapital) {
        response.json(dadosCapital)
        response.status(200)
    }else{
        response.json({erro: "Não foi possível encontrar um item"})
        response.status(404)
    }
})

//EndPoint 4: Retorna os estados que percencem a uma região, filtrando pela região
app.get('/regiao/estado/:regiao', cors(), async function(request, response, next){
    let regiao = request.params.regiao
    let dadosRegiao = controleFuncoes.getEstadosRegiao(regiao)

    if (dadosRegiao) {
        response.json(dadosRegiao)
        response.status(200)
    }else{
        response.json({erro: "Não foi possível encontrar um item"})
        response.status(404)
    }
})

//EndPoint 5: Retorna os dados dos estados que foram/são capitais do Brasil
app.get('/pais/capitais', cors(), async function(request, response, next){
    let dadosCapitais = controleFuncoes.getCapitalPais()

    if (dadosCapitais) {
        response.json(dadosCapitais)
        response.status(200)
    }else{
        response.json({erro: "Não foi possível encontrar um item"})
        response.status(404)
    }
})

//EndPoint 6: Retorna as cidades de um estado, filtrando pela sigla
app.get('/estado/cidades/:uf', cors(), async function(request, response, next){
    let siglaEstado = request.params.uf
    let cidades = controleFuncoes.getCidades(siglaEstado)

    if (cidades) {
        response.json(cidades)
        response.status(200)
    }else{
        response.json({erro: "Não foi possível encontrar um item"})
        response.status(404)
    }
})

//Executa a API e faz ela ficar aguardando requisições
app.listen(8080, function(){
    console.log('API funcionando e aguardando resquisições')
})