import React from 'react';
import {browserHistory } from 'react-router';

export default class SignIn extends React.Component {
	constructor(props){
		super(props)
		this.onSubmit = this.onSubmit.bind(this)
	}

	onSubmit(e){
		e.preventDefault()
		browserHistory.push('/homepage')
	}

	render(){
		return(
			<div>
	      <form onSubmit = {this.onSubmit} className="" action="index.html" method="post" >
	        <fieldset>
	          <div className="form-group">
	            <input className="form-control input-md" type="text" name="username" placeholder="User Name" />
	          </div>
	          <div className="form-group">
	            <input className="form-control input-md" type="password" name="password" placeholder="Password" />
	          </div>
	          <div className="form-group">
	            <button className="btn btn-sm btn-default dark-button">Sign In</button>
	          </div>
	        </fieldset>
	      </form>

			</div>
		)
	}
}
