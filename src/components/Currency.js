import React, { Component } from "react";

class Currency extends Component {
	render() {
		return (
			<p>The current currency is: {this.props.currency} !</p>
		);
	}
}

export default Currency;