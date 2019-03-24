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

    handleChange = (event) => {
    	const { name, value } = event.target;
    	this.setState({
    		[name]: value
    	});
    }


    // submit = () => {
    // 	let time = 50;
    // 	let activity = "abc";
    // 	this.props.handleSubmit(time, activity);
    // }

	render() {
		return (
			<form
			    onSubmit={this.props.handleSubmit}
			>
			    <input 
			        type="text"
			        name="start"
			        placeholder="Start"
			        value={this.state.start} 
			        onChange={this.handleChange}
			        required
			    />
			    <input 
			        type="text"
			        name="end"
			        placeholder="End"
			        value={this.state.end} 
			        onChange={this.handleChange}
			        required
			    />
			    <input
			        type="text"
			        name="activity"
			        placeholder="Activity"
			        value={this.state.activity} 
			        onChange={this.handleChange}
			        required
			    />
			    <button>Submit</button>
			</form>
		);
	}
}

export default GetActivity;