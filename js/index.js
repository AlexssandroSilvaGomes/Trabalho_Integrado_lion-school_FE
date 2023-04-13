'use strict'

import { getCursos } from './apicursos.js'
const jsonCursos = await getCursos()

const criarCardCursos = (curso) => {

    const cardCursos = document.createElement('div')
    cardCursos.classList.add('card')
    

    cardCursos.addEventListener('click', function(){
        localStorage.setItem('curso', nomeCurso.textContent)
        window.location.href = 'http://127.0.0.1:5500/index2.html'
    })

    const rowCards = document.createElement('div')
    rowCards.classList.add('row_card')

    const iconcurso = document.createElement('img')
    iconcurso.src = curso.icone

    const nomeCurso = document.createElement('text')
    nomeCurso.textContent = curso.sigla

    rowCards.append(iconcurso, nomeCurso)
    cardCursos.append(rowCards)
    
    
    return cardCursos
    
}

const carregarCards = () => {
    const containerCardCuros = document.getElementById('container_right_side_cards')


    const campos = jsonCursos.cursos.map(criarCardCursos)

    containerCardCuros.replaceChildren(...campos)
    

}

carregarCards()


