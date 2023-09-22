/************************************************************
 * Objetivo: Criar função para calcular a média de um aluno *
 * Data: 22/09/2023                                         *
 * Autor: Vitoria Azevedo da Cruz                           *
 ************************************************************/

const calcMedia = function(valor1, valor2, valor3, valor4){
    let nota1 = String(valor1).replace(',','.');
    let nota2 = String(valor2).replace(',','.');
    let nota3 = String(valor3).replace(',','.');
    let nota4 = String(valor4).replace(',','.');
    let media;

    media = Number(media);
    nota1 = Number(nota1);
    nota2 = Number(nota2);
    nota3 = Number(nota3);
    nota4 = Number(nota4);

    media = (nota1 + nota2 + nota3 + nota4) / 4;
    
    return media;
}


const statusAluno = function(media){
    media = String(media).replace(',','.');
    media = Number(media);
    let situacao;

    if(media >0 && media<50)
        situacao = 'Reprovado'
    else if (media>=70)
        situacao = 'Aprovado'
    if (media>=50 && media<=69) {
        situacao = 'em exame'
    }

    return situacao
}


const calcMediaExame = function (media,valor5){
    let nota5 = String(valor5).replace(',','.');
    media = Number(media)
    let mediaExame;

    nota5 = Number(nota5)
    mediaExame = Number(mediaExame)

    mediaExame = (media + nota5) / 2;
    
    return mediaExame;
}

const statusAlunoExame = function(mediaExame){
    mediaExame = String(mediaExame).replace(',','.');
    mediaExame = Number(mediaExame);

    let situacaoExame;

    if(mediaExame >60 && mediaExame<100)
        situacaoExame = 'Aprovado';
    else
        situacaoExame = 'Reprovado';

    return situacaoExame;

}