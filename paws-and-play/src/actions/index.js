
export function fetchParks(){
  debugger
  var key = "AIzaSyA8eaBLKqTOpqg12AmN861vesqSB7Oqnj4"
  var location = "40.6782,-73.9442"
	const parks = fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&radius=5000&type=park&key=${key}`).then(response =>{
			return response.json();
		}).then(ParksPayload =>{
			return ParksPayload;
		})
	return {
		type: 'FETCH_PARKS',
		payload: parks
	}
}
