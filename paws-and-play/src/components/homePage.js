import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index'
import { bindActionCreators } from 'redux'
import Schedule from './schedule.js'
import DogList from './dogList.js'
import ProfilePane from './profilePane.js'

class homePage extends React.Component {
  constructor(props) {
    super(props);

  }



  render() {
    return (
    <div className="row">
      <div className="col-md-6">
        <ProfilePane/>
      </div>
      <div className="col-md-6">
        <DogList/>
      </div>
    </div>
  )}
}






function mapDispatchToProps(dispatch){
  return {actions: bindActionCreators(actions, dispatch)}
}
const componentCreator = connect(null, mapDispatchToProps)
export default componentCreator(homePage)
