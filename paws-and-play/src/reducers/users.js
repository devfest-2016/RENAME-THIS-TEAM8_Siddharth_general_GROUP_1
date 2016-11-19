export default function users_reducer(state=[], action){

    switch(action.type){
        case 'FETCH_USERS':
            return [...state, action.payload];
        default:
            return state;
    }
}
