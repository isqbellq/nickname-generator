import React, { Component } from "react";

class GetActivity extends Component {
    constructor(props) {
    	super(props);
    }

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
			    onClick={this.props.handleSubmit}
			    />
			</form>
		);
	}
}

export default GetActivity;