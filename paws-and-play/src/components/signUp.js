import React from 'react';

export default function SignUp(){
	return(
		<div>
      <form className="" action="index.html" method="post" >
        <fieldset>
				<h2>User Info</h2>
					<div className="form-group">
            <input className="form-control input-md" type="text" name="name" value="" placeholder="Email" />
          </div>
          <div className="form-group">
            <input className="form-control input-md" type="password" name="username" value="" placeholder="Password" />
          </div>
					<h2>Dog Info</h2>
          <div className="form-group">
            <input className="form-control input-md" type="text" name="dogname" value="" placeholder="Dog Name" />
          </div>
          <div className="form-group">
            <input className="form-control input-md" type="text" name="name" value="" placeholder="Breed" />
          </div>
          <div className="form-group">
            <input className="form-control input-md" type="text" name="name" value="" placeholder="Age" />
          </div>
					<div className="form-group">
						<label for="male">Temperment:</label>
						<select>
						  <option value="sweet">Nice</option>
						  <option value="aggressive">Fuuny</option>
						  <option value="playful">Aggressive</option>
						  <option value="dumb">Dumb</option>
						</select>
					</div>
					<div className="form-group">
						<label for="male">Size:</label>
						<select>
						  <option value="xs">Extra Small</option>
						  <option value="s">Small</option>
						  <option value="m">Medium</option>
						  <option value="lg">Large</option>
						  <option value="xlg">Extra Large</option>
						</select>
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
