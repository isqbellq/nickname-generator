import React, { Component } from "react";

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

class Hello extends Component {
	render() {
		return (
			<h1>Hello!</h1>
		);
	}
}

class World extends Component {
	render() {
		return (
			<h1 onClick={() => this.props.sayHi()}>World!</h1>
		);
	}
}

export default HelloWorld;