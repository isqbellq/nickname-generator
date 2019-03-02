import React, { Component } from "react";

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

export default CurrencySwitcher;