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
        default : return state
    }

}