import React, { Component } from "react";

class GetActivity extends Component {
    constructor(props) {
    	super(props);
    	this.state = {
    		start: "",
    		end: "",
    		activity: ""
    	}
    }

    handleSubmit = (e) => {
    	this.setState({
    		start: e.target.value
    	});
    }

	render() {
		return (
			<form
			    onSubmit={this.props.handleSubmit}>
			    <input 
			        type="text"
			        name="start"
			        placeholder="Start"
			        onChange={this.handleSubmit}
			        required
			    />
			    <input 
			        type="text"
			        placeholder="End"
			        onChange={this.handleSubmit}
			        required
			    />
			    <input
			        type="text"
			        placeholder="Activity"
			        onChange={this.handleSubmit}
			        required
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