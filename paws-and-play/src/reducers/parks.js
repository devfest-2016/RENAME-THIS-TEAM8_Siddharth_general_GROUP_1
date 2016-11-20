export default function users_reducer(state=[], action){
  debugger
    switch(action.type){
        case 'FETCH_PARKS':
        debugger
            return [...state, action.payload];
        default:
            return state;
    }
}
