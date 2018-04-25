import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
// reduxForm brings the funcion that will super charge the form
// Field is used to bring a fild that can be specified with its attributes
class SetupTrip extends Component {
	render() {
		return (
			<form>
				<div className="form-field">
					<label>Where are you going?</label>
					<div>
						<Field type="text" component="input" name="where" />
					</div>
				</div>

				<div className="form-field">
					<label>When do you plan to go?</label>
					<div>
						<Field type="text" component="input" name="when" />
					</div>
				</div>

				<div className="form-field">
					<label>Who is coming?</label>
					<div>
						<Field type="text" component="input" name="who" />
					</div>
				</div>

				<button type="submit">Go</button>
			</form>
		);
	}
}

// redux form works as a function that super charges the form by calling the component as its argument. The form value inside the reduxForm function can be anmed anything as long as it is uniqu among other forms in this project.

// <Field type="text" component="input" name="where" />
export default reduxForm({
	form: 'SetupTrip'
})(SetupTrip);
