import React, { Component } from "react";
import Currency from "./Currency";
import CurrencySwitcher from "./CurrencySwitcher";

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

export default Converter;