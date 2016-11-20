import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index'
import { bindActionCreators } from 'redux'
import Schedule from './schedule.js'

class userParksAndSchedule extends React.Component {
  constructor() {
    super();
    this.find_parks = this.find_parks.bind(this)
  }

  find_parks(e) {
    e.preventDefault()
    this.props.actions.fetchParks(this.refs.zip.value)
  }

  render() {
    return (
      <div>
        <input type="text"  ref="zip" placeholder="zip code"/>
        <button className="btn btn-sm btn-default dark-button" onClick={this.find_parks}>Find Parks</button>
        <div id="map">
          { this.props.parks.length >0 ?
            <div>
              there are {this.props.parks.length} parks!
              <Schedule/>
            </div>
            :
            <div>
              there are no parks!
            </div>
          }
        </div>
			</div>
  )}
}

function mapStateToProps(state){
  return {
    parks: state.parks
  }
}

function mapDispatchToProps(dispatch){
  return {actions: bindActionCreators(actions, dispatch)}
}
const componentCreator = connect(mapStateToProps, mapDispatchToProps)
export default componentCreator(userParksAndSchedule)
