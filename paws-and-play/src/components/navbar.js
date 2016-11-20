import React from 'react'
import {Link} from 'react-router';


class NavBar extends React.Component {

  render() {

    return (
      <div id="custom-nav" className="navbar navbar-default navbar-static-top" >
        <div className="container">
          <div className="navbar-header">
            <button className = "navbar-toggle" data-toggle="collapse" data-target=".navHeaderCollapse">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link to="/">
            <img src="http://i.imgur.com/3lT61Xy.png" id="icon"></img>
            </Link>
            <Link to="/">
              <div id="brand" className='navbrand'>Paws & Play</div>
            </Link>
          </div>
            <div className="collapse navbar-collapse navHeaderCollapse">
              <ul className="nav navbar-nav navbar-right">
                <li><Link id='parks_and_schedule' to="/parks_and_schedule">Parks & Schedule</Link></li>
                <li><Link id='signup' to="/signup">Sign Up</Link></li>
                <li><Link id='signin' to="/signin">Sign In</Link></li>
                <li> <a href="#">Sign Out</a></li>
              </ul>
            </div>
          </div>
        </div>
    )
  }
}

export default NavBar;
