import React from 'react';
import * as actions from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import firebase from '../components/firebase_config'

const db = firebase.database().ref()


class SignUp extends React.Component {

	constructor(props) {
		super(props);
		this.onSubmit = this.onSubmit.bind(this)
		this.firebaseListener = this.firebaseListener.bind(this)
		this.firebaseListener()
	}

	firebaseListener(){
		db.on("child_added", snapshot => {
		this.props.actions.addUser(snapshot.val())
		})
	}

	onSubmit(e) {
		e.preventDefault()
		const newUserFromForm = {
			name: this.refs.name.value,
			  email: this.refs.email.value,
			  location: this.refs.location.value,
			  password: this.refs.password.value,
			  dog: {
			    name: this.refs.dogname.value,
			    breed: this.refs.breed.value,
			    age: this.refs.age.value,
			    // picture: this.refs.email.value,
			    description: this.refs.description.value,
			    temperament: this.refs.temperament.value,
			    size: this.refs.size.value
			  },
			  routine: {
			    days: {
			      "Monday": {
			        time: "Morning",
			        location: "Prospect Park"
			      },
			      "Tuesday": {
			        time: "Late Night",
			        location: "Creepy Dark Alley"
			      }
			    }
			  }
			}
			db.push(newUserFromForm)
		}

	render() {
		return(
			<div>
	      <form onSubmit={this.onSubmit} className="" action="index.html" method="post" >
	        <fieldset>
					<h2>User Info</h2>
						<div className="form-group">
	            <input className="form-control input-md" type="text" ref="name" placeholder="Your Name" />
	          </div>
						<div className="form-group">
	            <input className="form-control input-md" type="text" ref="email" placeholder="Email" />
	          </div>
						<div className="form-group">
	            <input className="form-control input-md" type="text" ref="location" placeholder="Zip Code" />
	          </div>
	          <div className="form-group">
	            <input className="form-control input-md" type="password" ref="password" placeholder="Password" />
	          </div>
						<h2>Dog Info</h2>
	          <div className="form-group">
	            <input className="form-control input-md" type="text" ref="dogname" placeholder="Dog Name" />
	          </div>
	          <div className="form-group">
	            <input className="form-control input-md" type="text" ref="breed" placeholder="Breed" />
	          </div>
	          <div className="form-group">
	            <input className="form-control input-md" type="text" ref="age" placeholder="Age" />
	          </div>
						<div className="form-group">
							<label for="male">Temperment:</label>
							<select ref="temperament">
							  <option value="1">1</option>
							  <option value="2">2</option>
							  <option value="3">3</option>
							  <option value="4">4</option>
							  <option value="5">5</option>
							  <option value="6">6</option>
							  <option value="7">7</option>
							  <option value="8">8</option>
							  <option value="9">9</option>
							  <option value="10">10</option>
							</select>
						</div>
						<div className="form-group">
							<label>Size:</label>
							<select ref="size">
							  <option value="xs">Extra Small</option>
							  <option value="s">Small</option>
							  <option value="m">Medium</option>
							  <option value="lg">Large</option>
							  <option value="xlg">Extra Large</option>
							</select>
						</div>
						<div className="form-group">
							<textarea className="form-control" ref="description" placeholder="Description"></textarea>
						</div>
	          <div className="form-group">
	            <button className="btn btn-lg btn-default dark-button">Sign Up</button>
	          </div>
	        </fieldset>
	      </form>

			</div>
		)}
}

function mapDispatchToProps(dispatch){
	return {actions: bindActionCreators(actions, dispatch)}
}


export default connect (null, mapDispatchToProps)(SignUp)
