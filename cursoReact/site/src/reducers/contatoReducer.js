const IINITIAL_STATE = {
    data: '2019-12-18',
    nome: 'João',
    email: 'joao@joao.com',
    telefeone: '12-2333 4444',
    assunto: 'Reclamação / Sugestão'
}

export default function(state = IINITIAL_STATE, action){
    switch(action.type){
        case 'ATUALIZA_DATA' : return{...state, data : action.value};
        case 'ATUALIZA_NOME' : return{...state, nome : action.value};
        case 'ATUALIZA_EMAIL' : return{...state, email : action.value};
        case 'ATUALIZA_TELEFONE' : return{...state, telefone : action.value};
        case 'ATUALIZA_ASSUNTO' : return{...state, assunto : action.value};
        default : return state
    }
}