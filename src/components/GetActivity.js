import React, { Component } from "react";

class GetActivity extends Component {
    constructor(props) {
    	super(props);
    }

	render() {
		return (
			<form>
			    <input 
			    id="start"
			    type="text"
			    placeholder="Start"
			    />
			    <input 
			    id="end"
			    type="text"
			    placeholder="End"
			    />
			    <input
			    id="activity"
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