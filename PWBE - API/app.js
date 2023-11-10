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


//EndPoints: Listar a sigla de todos os estados
app.get('/estados/sigla', cors(), async function(request, response, next){
    
    let controleListaEstados = require('./module/get_estados_cidades_array')
    let estados = controleListaEstados.getListaDeEstados('SP')

    response.json(estados)
    response.status(200)
})


//Executa a API e faz ela ficar aguardando requisições
app.listen(8080, function(){
    console.log('API funcionando e aguardando resquisições')
})