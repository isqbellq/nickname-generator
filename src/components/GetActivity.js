import React, { Component } from "react";

class GetActivity extends Component {

	render() {
		return (
			<form>
			    <input 
			    type="text"
			    placeholder="Start"
			    />
			    <input
			    type="text"
			    placeholder="End"
			    />
			    <input
			    type="text"
			    placeholder="Activity"
			    />
			    <input
			    type="submit"
			    value="Submit"
			    />
			</form>
		);
	}
}

export default GetActivity;