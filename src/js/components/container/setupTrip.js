import React, { Component } from 'react';

class SetupTrip extends Component {
	render() {
		return (
			<form>
				<div className="form-field">
					<label>Where are you going?</label>
					<div>
						<input type="text" name="where" />
					</div>
				</div>

				<div className="form-field">
					<label>When do you plan to go?</label>
					<div>
						<input type="text" name="when" />
					</div>
				</div>

				<div className="form-field">
					<label>Who is coming?</label>
					<div>
						<input type="text" name="who" />
					</div>
				</div>

				<button type="submit">Go</button>
			</form>
		);
	}
}

export default SetupTrip;
