export const dataOnChange = function(e){
    return{
        type : 'ATUALIZA_DATA',
        value : e.target.value
    }
}

export const nomeOnchange = function(e){
    return{
        type : 'ATUALIZA_NOME',
        value : e.target.value
    }
}

export const emailOnchange = function(e){
    return{
        type : 'ATUALIZA_EMAIL',
        value : e.target.value
    }
}

export const telefoneOnchange = function(e){
    return{
        type : 'ATUALIZA_TELEFONE',
        value : e.target.value
    }
}

export const assuntoOnchange = function(e){
    return{
        type : 'ATUALIZA_ASSUNTO',
        value : e.target.value
    }
}