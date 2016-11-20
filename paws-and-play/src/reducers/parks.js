


export default function users_reducer(state=[], action){

    switch(action.type){
        case 'FETCH_PARKS':
            return parksCleaner(action.payload);
        default:
            return state;
    }
}

function doesInclude(obj){
  return obj.name.toLowerCase().includes("park") ||
  obj.name.toLowerCase().includes("knoll") ||
  obj.name.toLowerCase().includes("playground") ||
  obj.name.toLowerCase().includes("field") ||
  obj.name.toLowerCase().includes("garden")
}

function parksCleaner(parks){
  return parks.ParksPayload.results.filter(doesInclude)
}
