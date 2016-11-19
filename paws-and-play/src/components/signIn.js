import React from 'react';

export default function SignUp(){
	return(
		<div>
      <form className="" action="index.html" method="post" >
        <fieldset>
          <div className="form-group">
            <input className="form-control input-md" type="text" name="username" value="" placeholder="User Name" />
          </div>
          <div className="form-group">
            <input className="form-control input-md" type="password" name="password" value="" placeholder="Password" />
          </div>
          <div className="form-group">
            <button className="btn btn-lg btn-default dark-button">Sign In</button>
          </div>
        </fieldset>
      </form>

		</div>
	)
}
