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
            <input className="form-control input-md" type="text" name="dogname" value="" placeholder="Dog Name" />
          </div>
          <div className="form-group">
            <input className="form-control input-md" type="text" name="name" value="" placeholder="Email" />
          </div>
          <div className="form-group">
            <input className="form-control input-md" type="text" name="name" value="" placeholder="something" />
          </div>
          <div className="form-group">
            <textarea className="form-control" placeholder="Description"></textarea>
          </div>
          <div className="form-group">
            <button className="btn btn-lg btn-default dark-button">Sign Up</button>
          </div>
        </fieldset>
      </form>

		</div>
	)
}
