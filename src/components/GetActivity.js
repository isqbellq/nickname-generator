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
			        onChange={e => this.setState({start: e.target.value})}
			        required
			    />
			    <input 
			        type="text"
			        value={this.props.end}
			        placeholder="End"
			        onChange={e => this.setState({end: e.target.value})}
			        required
			    />
			    <input
			        type="text"
			        value={this.props.activity}
			        placeholder="Activity"
			        onChange={e => this.setState({activity: e.target.value})}
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