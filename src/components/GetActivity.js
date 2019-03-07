import React, { Component } from "react";

class GetActivity extends Component {

	render() {
		return (
			<form>
			    <input 
			    id="start"
			    type="text"
			    placeholder="Start"
			    value={this.props.start}
			    />
			    <input 
			    id="end"
			    type="text"
			    placeholder="End"
			    value={this.props.end}
			    />
			    <input
			    id="activity"
			    type="text"
			    placeholder="Activity"
			    value={this.props.activities}
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