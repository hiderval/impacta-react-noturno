import axios from 'axios';
const URL = 'http://localhost:3200/api/contatos'


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

export const limpar = function(e){
    return{
        type : 'ATUALIZA_LIMPAR',
        value : e.target.value
    }
}

export const adicionar = function(data, nome, email, telefone, assunto){
    return (dispatch) =>{
    
    return axios.post(URL, {
            data,
            nome,
            email,
            telefone,
            assunto,
        })
        .then(_ =>{
            alert('Contato enviado')
            dispatchEvent({
                type : 'ATUALIZA_LIMPAR'
            })
        }).catch(error =>{
            console.log(error)
            alert('Erro ao salvar')
        })
}
}