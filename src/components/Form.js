import React, { Component } from "react";

class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: ""
		};
		this.file = React.createRef()
	}

	handleChange = event => {
		this.setState({
			username: event.target.value
		});
	}

	handleSubmit = event => {
		alert(this.state.username);
		alert(this.file.current.files[0].name);
		event.preventDefault();
	}

	render() {
		return (
			<form
			onSubmit={this.handleSubmit}
			>
			    <input 
			    type="file"
			    ref={this.file}
			    />
			    <input
			    type="text"
			    value={this.state.username}
			    onChange={this.handleChange}
			    />
			    <input
			    type="submit"
			    value="Submit"
			    />
			</form>
		);
	}
}

export default Form;