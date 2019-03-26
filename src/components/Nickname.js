import React, {Component} from 'react';

class Nickname extends Component {
	
  render() {
  	let adj = this.props.nickAdj;
  	let name = this.props.nickNoun;

		return(
			<div className="nickname">
			  <h2 style={{color: "#666"}}>{adj} </h2>
			  <h2>{name}</h2>
			</div>
		);
	}
}

export default Nickname;