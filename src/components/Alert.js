import React, { Component } from "react";

class Alert extends Component {
	componentDidMount() {
		console.log("Woooooooooooooo");
	}

	render() {
		return (
			<p>This component console.logs something as soon as it is mounted to the DOM.</p>
		);
	}
}

export default Alert;