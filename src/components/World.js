import React, { Component } from "react";

class World extends Component {
	
	render() {
		return (
			<h1 onClick={() => this.props.sayHi()}>World!</h1>
		);
	}
}

export default World;