const form = document.getElementById('form-atividade')
const atividades =[]
const notas=[]
const spanAprovado = '<span class="resultado aprovado"Aprovado</span>'
const spanReprovado = '<span class="resultado reprovado"Reprovado</span>'
const notaMinima = parseFloat(prompt('Digite a nota mínima:'))


let resul = ''
form.addEventListener('submit', function(e){
    e.preventDefault()

adicionaLinha()
adicionaTabela()
mediaNotaFinal()
})

function adicionaLinha(){
    const nomeAtividade = document.querySelector('#nome-atividade')
    const notaAtividade = document.querySelector('#nota-atividade')

    if(atividades.includes(nomeAtividade.value) ){
        alert(`A atividade ${nomeAtividade.value} já existe!`)
    }else{

    atividades.push(nomeAtividade.value)
    notas.push(parseFloat(notaAtividade.value))
    
        let res ='<tr>'
        res += `<td> ${nomeAtividade.value} </td>`
        res += `<td> ${notaAtividade.value} </td>`
        res += `<td> ${notaAtividade.value >= notaMinima ? '&#x1F973' : '&#x1F61E' } </td>`
        res+= '</tr>'
    
        resul += res
    }
        nomeAtividade.value = '';
        notaAtividade.value = '';
    
}

function adicionaTabela(){
    const corpoTabela = document.querySelector('tbody')
        corpoTabela.innerHTML = resul
    
}

function mediaNotaFinal(){
    const mediaFinal = calculaMediaFinal()

    document.querySelector('#media-final-valor').innerHTML=mediaFinal

    document.querySelector('#media-final-resultado').innerHTML=mediaFinal >= notaMinima ? spanAprovado : spanReprovado

    
}

function calculaMediaFinal(){


    let somaDasNotas = 0

    for(c = 0; c < notas.length ; c++) {
        somaDasNotas += notas[c]
    }

    return somaDasNotas / notas.length
}




