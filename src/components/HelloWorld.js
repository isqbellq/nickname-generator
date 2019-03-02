import React, { Component } from "react";
import Hello from "./Hello";
import World from "./World";

class HelloWorld extends Component {

	render() {

		return (
			<div className="helloworld">
			    <Hello />
			    <World />
			</div>
		);
	}
}

export default HelloWorld;