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
