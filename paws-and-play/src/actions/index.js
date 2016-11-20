var firebase = require('firebase')
var config = {
  apiKey: "AIzaSyAtzhSbiqCGV6sUV0oBMRRlqT6IGjEY2gE",
  authDomain: "paws-and-play.firebaseapp.com",
  databaseURL: "https://paws-and-play.firebaseio.com",
  storageBucket: "paws-and-play.appspot.com",
  messagingSenderId: "1041740125728"
}

firebase.initializeApp(config);

const db = firebase.database().ref('users')


// get all users

//USER ACTIONS
export function addUser(newUserFromForm) {
  db.push(newUserFromForm)
}

export function removeUser(userKey) {

}

//DOG ACTIONS
export function addDog(newDogFromForm) {
  db.push(newDogFromForm)
}

export function fetchParks(zip){
  debugger
  var key = "AIzaSyA8eaBLKqTOpqg12AmN861vesqSB7Oqnj4"
  const parks  = fetch(`http://maps.googleapis.com/maps/api/geocode/json?address=${zip}`).then(response =>{
    return response.json();
  }).then(CoordsPayload =>{
    let lat = CoordsPayload.results[0].geometry.location.lat
    let long = CoordsPayload.results[0].geometry.location.lng
    let coords = lat + " " + long
    return fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${coords}&radius=1600&keyword=park&type=park&key=${key}`).then(response =>{
  			return response.json();
  		}).then(ParksPayload =>{
  			return {ParksPayload,CoordsPayload, lat, long};
  		});
  })
	return {
		type: 'FETCH_PARKS',
		payload: parks
	}
}
