import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index'
import { bindActionCreators } from 'redux'
import Schedule from './schedule.js'
import DogList from './dogList.js'

class homePage extends React.Component {
  constructor(props) {
    super(props);

  }



  render() {
    return (
      <DogList/>
  )}
}






function mapDispatchToProps(dispatch){
  return {actions: bindActionCreators(actions, dispatch)}
}
const componentCreator = connect(null, mapDispatchToProps)
export default componentCreator(homePage)
