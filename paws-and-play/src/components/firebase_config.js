import firebase from 'firebase'

var config = {
	apiKey: "AIzaSyAtzhSbiqCGV6sUV0oBMRRlqT6IGjEY2gE",
	authDomain: "paws-and-play.firebaseapp.com",
	databaseURL: "https://paws-and-play.firebaseio.com",
	storageBucket: "paws-and-play.appspot.com",
	messagingSenderId: "1041740125728"
};

const dbRef = firebase.initializeApp(config);

export default dbRef
