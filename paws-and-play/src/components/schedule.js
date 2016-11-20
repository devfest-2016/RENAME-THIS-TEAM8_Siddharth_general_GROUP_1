import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index'
import { bindActionCreators } from 'redux'

class Schedule extends React.Component {

	constructor(props) {
		super(props);

	}

	render() {

		return(
		<div className="row">
			<div className="col-md-6">
				<form className="" action="index.html" method="post" >
					<fieldset>
						<h2>Weekdays</h2>
							<div className="form-group">
								<label for="male">Walk Time:</label>
								<select defaultValue='default'>
									<option disabled value="default" >-- select an option --</option>
									<option value="1:00am">1:00am</option>
									<option value="2:00am">2:00am</option>
									<option value="3:00am">3:00am</option>
									<option value="4:00am">4:00am</option>
									<option value="5:00am">5:00am</option>
									<option value="6:00am">6:00am</option>
									<option value="7:00am">7:00am</option>
									<option value="8:00am">8:00am</option>
									<option value="9:00am">9:00am</option>
									<option value="10:00am">10:00am</option>
									<option value="11:00am">11:00am</option>
									<option value="12:00am">12:00am</option>

									<option value="1:00pm">1:00pm</option>
									<option value="2:00pm">2:00pm</option>
									<option value="3:00pm">3:00pm</option>
									<option value="4:00pm">4:00pm</option>
									<option value="5:00pm">5:00pm</option>
									<option value="6:00pm">6:00pm</option>
									<option value="7:00pm">7:00pm</option>
									<option value="8:00pm">8:00pm</option>
									<option value="9:00pm">9:00pm</option>
									<option value="10:00pm">10:00pm</option>
									<option value="11:00pm">11:00pm</option>
									<option value="12:00pm">12:00pm</option>

								</select>
							</div>

							<div>
								<label for="male">Nearby Parks:</label>
								<select defaultValue='default'>
									<option disabled value="default" >-- select an option --</option>
									{this.props.parks.map(function(element){
										return <option value={element.name}>{element.name}</option>
									})
									}
								</select>
							</div>
						<div className="form-group">
							<button className="btn btn-lg btn-default dark-button">Sign Up</button>
						</div>
					</fieldset>
				</form>
			</div>

			<div className="col-md-6">
				<form className="" action="index.html" method="post" >
					<fieldset>
						<h2>Weekend</h2>
							<div className="form-group">
								<label for="male">Walk Time:</label>
								<select defaultValue='default'>
									<option disabled value="default" >-- select an option --</option>
									<option value="1:00am">1:00am</option>
									<option value="2:00am">2:00am</option>
									<option value="3:00am">3:00am</option>
									<option value="4:00am">4:00am</option>
									<option value="5:00am">5:00am</option>
									<option value="6:00am">6:00am</option>
									<option value="7:00am">7:00am</option>
									<option value="8:00am">8:00am</option>
									<option value="9:00am">9:00am</option>
									<option value="10:00am">10:00am</option>
									<option value="11:00am">11:00am</option>
									<option value="12:00am">12:00am</option>

									<option value="1:00pm">1:00pm</option>
									<option value="2:00pm">2:00pm</option>
									<option value="3:00pm">3:00pm</option>
									<option value="4:00pm">4:00pm</option>
									<option value="5:00pm">5:00pm</option>
									<option value="6:00pm">6:00pm</option>
									<option value="7:00pm">7:00pm</option>
									<option value="8:00pm">8:00pm</option>
									<option value="9:00pm">9:00pm</option>
									<option value="10:00pm">10:00pm</option>
									<option value="11:00pm">11:00pm</option>
									<option value="12:00pm">12:00pm</option>

								</select>
							</div>

							<div>
								<label for="male">Nearby Parks:</label>
								<select defaultValue='default'>
									<option disabled value="default" >-- select an option --</option>
									{this.props.parks.map(function(element){
										return <option value={element.name}>{element.name}</option>
									})
									}
								</select>
							</div>
						<div className="form-group">
							<button className="btn btn-lg btn-default dark-button">Sign Up</button>
						</div>
					</fieldset>
				</form>
			</div>
		</div>
		)


	}


}


function mapStateToProps(state){
  debugger
  return {
    parks: state.parks
  }
}

function mapDispatchToProps(dispatch){
  return {actions: bindActionCreators(actions, dispatch)}
}
const componentCreator = connect(mapStateToProps, mapDispatchToProps)
export default componentCreator(Schedule)




// <div>
// 	<label for="male">Walk Time:</label>
// 	<select>
// 		this.props.list.map(function(listValue){
// 			return React.createElement("option",null,listValue.name)
// 		}
// 	</select>
// </div>
