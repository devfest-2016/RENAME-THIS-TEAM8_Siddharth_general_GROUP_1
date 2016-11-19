import React from 'react'


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
            <a href="#" className="navbar-brand">Paws and Play</a>
          </div>
            <div className="collapse navbar-collapse navHeaderCollapse">
              <ul className="nav navbar-nav navbar-right">
                <li> <a href="/signup">SignUp</a></li>
                <li> <a href="#">About</a></li>
                <li> <a href="#">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
    )
  }
}

export default NavBar;
