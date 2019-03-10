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
	render() {
		return (
			<form
			    onSubmit={this.props.handleSubmit}>
			    <input 
			        type="text"
			        value={this.props.start}
			        placeholder="Start"
			        onChange={event => this.setState({start: event.target.value})}
			        required
			    />
			    <input 
			        type="text"
			        value={this.props.end}
			        placeholder="End"
			        onChange={event => this.setState({end: event.target.value})}
			        required
			    />
			    <input
			        type="text"
			        value={this.props.activity}
			        placeholder="Activity"
			        onChange={event => this.setState({activity: event.target.value})}
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