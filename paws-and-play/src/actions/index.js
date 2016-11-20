import firebase from '../components/firebase_config'

const db = firebase.database().ref('users')

// get all users

//USER ACTIONS
export function addUser(newUserFromForm) {
  return {type: 'ADD_USER', payload: newUserFromForm}
}

//DOG ACTIONS
export function addDog(newDogFromForm) {
  db.push(newDogFromForm)
}

function doesInclude(obj){
  return obj.name.includes("park")
}

function parksCleaner(parks){
  return parks.results.filter(doesInclude)
}

export function fetchParks(zip){

  var key = "AIzaSyA8eaBLKqTOpqg12AmN861vesqSB7Oqnj4"
  const parks  = fetch(`http://maps.googleapis.com/maps/api/geocode/json?address=${zip}`).then(response =>{
    return response.json();
  }).then(CoordsPayload =>{
    let lat = CoordsPayload.results[0].geometry.location.lat
    let long = CoordsPayload.results[0].geometry.location.lng
    let coords = lat + " " + long
    return fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${coords}&radius=1600&type=park&key=${key}`).then(response =>{
  			return response.json();
  		}).then(ParksPayload =>{
  			return {ParksPayload};
  		});
  })
	return {
		type: 'FETCH_PARKS',
		payload: parks
	}
}
