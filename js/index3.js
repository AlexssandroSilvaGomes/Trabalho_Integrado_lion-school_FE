'use strict'

import {getAlunoInfo} from './apicursos.js'
const jSonAlunosInfo = await getAlunoInfo()

const mostrarCardAluno = (aluno) =>{

    const cardAluno = document.createElement('div')
    cardAluno.classList.add('container_card_aluno')

    const fotoAluno = document.createElement('img')
    fotoAluno.src = aluno.foto

    const nomeAluno = document.createElement('text')
    nomeAluno.textContent = aluno.nome

    cardAluno.append(fotoAluno, nomeAluno)

    return cardAluno
    console.log(cardAluno)

}

const carregarCardAluno = () =>{

    const containerCardAlunos = document.getElementById('card_aluno')

    const campos = jSonAlunosInfo.aluno.map(mostrarCardAluno)

    containerCardAlunos.replaceChildren(...campos)

}

// const mostrarNotasAluno = (aluno) =>{
//     const
// }

carregarCardAluno()