/***********************************************************************
 * Objetivo: Aprender a trabalhar com estruturas de dados Array e JSON *
 * Data: 29/09/2023                                                    *
 * Autor: Vitoria Azevedo da Cruz                                      *
 * Versão: 1.0                                                         *
 ***********************************************************************/

// [ ] -> Representa a estrutura ARRAY
// { } -> Representa a estrutura JSON

/**
 * Existem diversos tipo de dados para integração de tecnologias
 *  Exemplo 1 - XML: <atributo> valor </atributo>
 *  Exemplo 2 - JSON: { atributo: valor }
 */

const introducaoArray = function(){

    //Criando um ARRAY de forma manual
    let listaDeNomes = ['José', 'Ana', 'Luiz', 'Maria', 'Carlos', 'Eduardo'];

    //Exibe os dados do ARRAY
    console.log(listaDeNomes);

    //Exibe os dados do ARRAY em formato de tabela
    console.table(listaDeNomes);

    //Retorna a quantidade de elementos de um array
    console.log(listaDeNomes.length);

    //Adiciona elementos novos no FINAL da lista
    listaDeNomes.push('Roberto');

    //Adiciona elementos novos no INÍCIO da lista, "empurrando" os outros elementos para baixo (menos usado por mudar o índice dos elementos)
    listaDeNomes.unshift('Ricardo');

    //Remove o ÚLTIMO elemento do array
    listaDeNomes.pop();

    //Remove o PRIMEIRO elemento do array
    listaDeNomes.shift();

    //Remove um elemento baseado no índice, podendo definir a qtde de itens a serem excluídos, a partir do índice indicado
    //Ex: .slpice(2,3) -> 2 é referente ao índice | -> 3 é referente a qtde de itens
    listaDeNomes.splice(2,1);

    listaDeNomes.push('André da Silva', 'Ricardo da Silva', 'João da Silva', 10, true);

    console.log(listaDeNomes);

    console.table(listaDeNomes);

    //Retorna o tipo de dados de um elemento
    console.log(typeof(listaDeNomes[9]));

}

const percorrendoArray = function(){
    let listaDeProdutos = ['Mouse', 'Teclado', 'Monitor', 'Impressora', 'Mouse Pad', 'Gabinete', 'Processador', 'HD'];

    //WHILE
    // let cont = 0;
    // while(cont < listaDeProdutos.length){
    //     console.log(`Nome do produto: ${listaDeProdutos[cont]}`);
    //     cont++;
    // }


    //FOR
    // for(let cont=0; cont<listaDeProdutos.length; cont++){
    //     console.log(`Nome do produto: ${listaDeProdutos[cont]}`);
    // }


    //FOREACH
    // listaDeProdutos.forEach(function(produto, indice){
    //     console.log(`${indice} - Nome do produto: ${produto}`);
    // })

    //Retorna o índice do elemento que foi encontrado
    //Caso não exista o item buscado, retorna -1
    console.log(listaDeProdutos.indexOf('Impressora'));

    //Retorna um booleano do elemento que foi buscado: true se o item exsitir, false se não existir
    console.log(listaDeProdutos.includes('Mouse'));
}

const filtrarProduto = function(nomeProduto){
    let listaDeProdutos = ['Mouse', 'Teclado', 'Monitor', 'Impressora', 'Mouse Pad', 'Gabinete', 'Processador', 'HD'];
    let nome = String(nomeProduto);

    let status = false;

    
    // return listaDeProdutos.includes(nome)

    listaDeProdutos.forEach(function(produto){
        if(produto.toLowerCase() == nome.toLowerCase()){
            status = true;
        }
    })
    return status
}

const manipulandoArrayJson = function(){
    //JSON é basedao na estrutura de chaves: 
    //  { atributo: valor }

    //Criando um JSON manual
    let contato = {nome: 'José da Silva', telefone: '47724889', email: 'jose@gmail.com'}
    let contato2 = {nome: 'Maria da Silva', telefone: '500669965', email: 'maria@gmail.com'}
    let contato3 = {nome: 'Ana da Silva', telefone: '688774455', email: 'ana@gmail.com'}

    //Criando um array que tem objetos JSON
    let arrayContatos = [contato, contato2, contato3]
    
    //Criando novos atributos no JSON de forma dinâmica
    contato.celular = '978884566'
    contato.data_nascimento = '2000-05-10'
    contato.idade = 23

    //Para extrair o conteúdo de cada atributo do JSON
    console.log(`Nome: ${contato.nome}`)
    console.log(`Telefone: ${contato.telefone}`)
    console.log(`E-mail: ${contato.email}`)
    console.log(`Celular: ${contato.celular}`)
    console.log(`Data de Nascimento: ${contato.data_nascimento}`)
    console.log(`Idade: ${contato.idade}`)

    console.log(arrayContatos)
    // console.log(arrayContatos[0])
    // console.log(arrayContatos[1])
    // console.log(arrayContatos[0].nome)

    arrayContatos.forEach(function(dados){
        console.log(`Nome: ${dados.nome}`)
        console.log(`Telefone: ${dados.telefone}`)
        console.log(`E-mail: ${dados.email}`)

        //Tratamento para validar a impressão dos valores
        if(dados.celular != undefined)
            console.log(`Celular: ${dados.celular}`)
        if(dados.data_nascimento != undefined)
            console.log(`Data de Nascimento: ${dados.data_nascimento}`)
        if(dados.idade != undefined)
            console.log(`Idade: ${dados.idade}`)
        console.log()
    })

}

const proutosArrayJson = function(){
    let listaCores = [
                        {id: 1, nome_cor: 'Branco'},
                        {id: 2, nome_cor: 'Preto'},
                        {id: 3, nome_cor: 'Cinza'},
                        {id: 4, nome_cor: 'Rosa'},
                        {id: 5, nome_cor: 'Vermelho'},
                        {id: 6, nome_cor: 'Azul'},
                    ]

    let listaMarcas = [
                        {id: 1, nome_marca: 'Dell'},
                        {id: 2, nome_marca: 'Lenovo'},
                        {id: 3, nome_marca: 'Apple'},
                        {id: 4, nome_marca: 'Logitech'},
                        {id: 5, nome_marca: 'Positivo'},
                        {id: 6, nome_marca: 'Multilaser'},
                        {id: 7, nome_marca: 'Razer'},
                    ]

    let listaCategorias = [
                            {id: 1, nome_categoria: 'Hardware', descricao: 'Hardware'},
                            {id: 2, nome_categoria: 'Periféricos', descricao: 'Periféricos'},
                            {id: 3, nome_categoria: 'Gamer', descricao: 'Gamer'},
                            {id: 4, nome_categoria: 'Acessórios', descricao: 'Acessórios'},
                        ]

    //Cria um objeto do tipo JSON para o array de produtos
    let JSONProdutos = {};

    //Cria um objeto do tipo ARRAY para guardar os produtos
    let ARRAYProdutos = [];

    //Objeto para criar os produtos
    let produto1 = {
                        id: 1,
                        nome: 'Mouse',
                        descricao: 'Mouse optico com fio',
                        categoria: listaCategorias[1],
                        marca: listaMarcas[0],
                        cor: [
                            listaCores[0],
                            listaCores[1],
                            listaCores[2]
                        ]
                    };

    let produto2 = {
                        id: 2,
                        nome: 'Teclado',
                        descricao: 'Teclado com fio padrão ABNT',
                        categoria: listaCategorias[1],
                        marca: listaMarcas[3],
                        cor: listaCores
                    };

    let produto3 = {
                        id: 3,
                        nome: 'Headset',
                        descricao: 'Headset sem fio com cancelamento de ruído',
                        categoria: listaCategorias[1],
                        marca: listaMarcas[3],
                        cor: listaCores
                    };

    let produto4 = {
                        id: 4,
                        nome: 'Monitor',
                        descricao: 'Monitor ultra wide 4K',
                        categoria: listaCategorias[2],
                        marca: listaMarcas[3],
                        cor: [
                            listaCores[0],
                            listaCores[1],
                        ]
                    };
    
    //Adicionando os produtos no array de produtos
    ARRAYProdutos.push(produto1);
    ARRAYProdutos.push(produto2);
    ARRAYProdutos.push(produto3);
    ARRAYProdutos.push(produto4);

    //Adiciona o atributo produtos e coloca o array de produtos dentro dele
    JSONProdutos.produtos = ARRAYProdutos

    //Adiciona o atributo count e coloca a quantidade de produtos
    JSONProdutos.count = ARRAYProdutos.length

    //Adiciona o atributo status e coloca o codigo 200 que é requisição bem sucedida
    JSONProdutos.status = 200

    return JSONProdutos;
}

const exibeProdutos = function(JSONProdutos){
}

exibeProdutos()

// proutosArrayJson()

// manipulandoArrayJson()

// console.log(filtrarProduto('ana'))

// percorrendoArray();

// introducaoArray();