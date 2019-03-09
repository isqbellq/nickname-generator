import React, { Component } from "react";

class GetActivity extends Component {

	render() {

		return (
			<form>
			    <input 
			    type="text"
			    value={this.props.start}
			    placeholder="Start"
			    />
			    <input 
			    type="text"
			    value={this.props.end}
			    placeholder="End"
			    />
			    <input
			    type="text"
			    value={this.props.activity}
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