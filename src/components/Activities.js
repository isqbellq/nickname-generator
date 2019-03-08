import React, { Component } from "react";

class Activities extends Component {

	render() {
		return (
			<ul className="Activities">
			    <li>Act 1</li>
			    <li>Act 2</li>
			    <li>Act 3</li>
			    <li>{this.props.activities}</li>
			</ul>
		);
	}
}

export default Activities;