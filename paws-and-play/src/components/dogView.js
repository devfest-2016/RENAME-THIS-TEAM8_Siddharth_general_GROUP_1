import React from 'react';
export default class DogView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Name: {this.props.name}</h1>
        <img src={this.props.photoUrl}/>
        <h3>Breed: {this.props.breed}</h3>
        <h3>Size: {this.props.size}</h3>
        <h3>Age: {this.props.age}</h3>
        <h3>Description: {this.props.description}</h3>
        <h3>Temperament: {this.props.temperament}</h3>
			</div>
  )}
}
