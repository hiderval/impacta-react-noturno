const INITIAL_STATE = {
    data: '00/00/0000',
    nome: '',
    email: '',
    telefone: '',
    assunto: ''
}

export default function(state = INITIAL_STATE, action){
    switch(action.type){
        case 'ATUALIZA_DATA' : return{...state, data : action.value};
        case 'ATUALIZA_NOME' : return{...state, nome : action.value};
        case 'ATUALIZA_EMAIL' : return{...state, email : action.value};
        case 'ATUALIZA_TELEFONE' : return{...state, telefone : action.value};
        case 'ATUALIZA_ASSUNTO' : return{...state, assunto : action.value};
        case 'ATUALIZA_LIMPAR' : return INITIAL_STATE;
        default : return INITIAL_STATE
    }
}

