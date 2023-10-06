/***********************************************************************************
 * Objetivo: Criar um sistema que gerencie as médias escolares de uma universidade *
 *            conforme os requisitos propostos.                                    *
 * Data: 22/09/2023                                                                *
 * Autor: Vitoria Azevedo da Cruz                                                  *
 * Versão: 1.0                                                                     *
 ***********************************************************************************/

var media = require('./modulo/calcularMedia');

var readline = require('readline');

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Entrada de dados para o NOME DO ALUNO
entradaDeDados.question('Insira o nome do aluno: ', function (alunoNome) {
    let nomeAluno = alunoNome;

    //Entrada de dados para o SEXO DO ALUNO
    entradaDeDados.question('Insira o sexo do aluno: ', function (sexoAluno) {
        let alunoSexo = sexoAluno;

        //Entrada de dados para o NOME DO PROFESSOR
        entradaDeDados.question('Insira o nome do professor: ', function (professorNome) {
            let nomeProfessor = professorNome;

            //Entrada de dados para o SEXO DO PROFESSOR
            entradaDeDados.question('Insira o sexo do professor: ', function (sexoProfessor) {
                let professorSexo = sexoProfessor

                //Entrada de dados para a DISCIPLINA
                entradaDeDados.question('Insira o nome da disciplina: ', function (materia) {
                    let disciplina = materia;

                    //Entrada de dados para a PRIMEIRA NOTA
                    entradaDeDados.question('Insira a primeira nota: ', function (primeiraNota) {
                        let nota1 = primeiraNota;

                        //Entrada de dados para a SEGUNDA NOTA
                        entradaDeDados.question('Insira a segunda nota: ', function (segundaNota) {
                            let nota2 = segundaNota;

                            //Entrada de dados para a TERCEIRA NOTA
                            entradaDeDados.question('Insira a terceira nota: ', function (terceiraNota) {
                                let nota3 = terceiraNota;

                                //Entrada de dados para a QUARTA NOTA
                                entradaDeDados.question('Insira a quarta nota: ', function (quartaNota) {
                                    let nota4 = quartaNota;

                                    if (nota1 == "" || nota2 == "" || nota3 == "" || nota4 == "")
                                        console.log('ERRO: Insira TODOS os valores!!')
                                    else if(isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4))
                                        console.log("ERRO: Insira apenas números!!")
                                    else if (nota1 < 0 || nota1 > 100 || nota2 < 0 || nota2 > 100 || nota3 < 0 || nota3 > 100 || nota4 < 0 || nota4 > 100)
                                        console.log('ERRO: Insira valores apenas entre 1 e 100!')
                                    else{
                                        let imprimirMedia = media.calcMedia(nota1, nota2, nota3, nota4)
                                        let imprimirStatus = media.statusAluno(imprimirMedia)
                                        console.log(`A média é: ${imprimirMedia}`)
                                        console.log(`A classificação é: ${imprimirStatus}`)

                                        // let status = false;
                                        if (imprimirStatus == 'em exame') {
                                            entradaDeDados.question('Insira a nota do exame: ', function(quintaNota){
                                                let nota5 = quintaNota;

                                                let imprimirExame = media.calcMediaExame(imprimirMedia, nota5)
                                                let imprimirStatusExame = media.statusAlunoExame(imprimirExame)
                                                console.log(`A média é: ${imprimirExame}`)
                                                console.log(`A classificação é: ${imprimirStatusExame}`)
                                                // status = true;


                                            })
                                        }
                                        // return status;
                                        
                                        entradaDeDados.close();
                                    }
                                    
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})