import React, { Component } from "react";

class Converter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currency: "$"
		}
	}

	handleChangeCurrency = () => {
		this.setState({
			currency: (this.state.currency === "$") ? "€" : "$"
		});
	}

	render() {
		return (
			<div>
			    <Currency currency={this.state.currency} />
			    <CurrencySwitcher currency={this.state.currency} handleChangeCurrency={this.handleChangeCurrency} />
			</div>
		);
	}
}

class Currency extends Component {
	render() {
		return (
			<p>The current currency is: {this.props.currency} !</p>
		);
	}
}


class CurrencySwitcher extends Component {
	render() {
		return (
			<button 
			currency={this.props.currency} 
			onClick={this.props.handleChangeCurrency}> 
			Click to change currency.
			</button>
		);
	}
}

export default Converter;