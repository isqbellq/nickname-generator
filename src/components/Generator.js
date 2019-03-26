import React, {Component} from 'react';
import Nickname from './Nickname';

class Generator extends Component {
	
  render() {
		return(
			<div className="generator">
			  <Nickname 
			    nickAdj={this.props.nickAdj}
			    nickNoun={this.props.nickNoun}
			  />
			  <button
			    onClick={this.props.generate}
			  >
			    New Nickname
			  </button>
			</div>
		);
	}
}

export default Generator;