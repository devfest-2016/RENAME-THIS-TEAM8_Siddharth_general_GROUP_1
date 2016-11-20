import React from 'react';



export default class DogFilter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <select defaultValue='default'>
          <option disabled value="default" >-- Filter Friends --</option>
          <option value="Location">Location</option>
          <option value="Dog Breed">Breed</option>
          <option value="Dog Size">Size</option>
          <option value="Morning">Morning</option>
          <option value="Midday">Midday</option>
          <option value="Late Night">Late Night</option>
        </select>
      </div>
  )}
}
