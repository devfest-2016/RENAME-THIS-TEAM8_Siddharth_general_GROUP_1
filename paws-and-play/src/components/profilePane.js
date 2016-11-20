import React from 'react';

export default class ProfilePane extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    var photoStyle = {
      width: "20%",
      height: "20%",
      borderRadius: "50%",
    }

    return (
      <div>
        <h1>Hi, Name!</h1>
        <img style={photoStyle} src='https://www.cesarsway.com/sites/newcesarsway/files/styles/large_article_preview/public/Common-dog-behaviors-explained.jpg?itok=FSzwbBoi'/>
        <h3>Fido</h3>
        <h4><a href="#">Edit Profile</a></h4>
        <h4><a href="#">Edit Routine</a></h4>
			</div>
  )}
}
