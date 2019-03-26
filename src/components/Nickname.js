import React, {Component} from 'react';

class Nickname extends Component {
	
  render() {
  	let adj = this.props.nickAdj;
  	let name = this.props.nickNoun;
  	let content;

  	if (this.props.nickAdj && this.props.nickNoun) {
  		content = (
    		<div className="nickname">
  		    <h2 style={{color: "#666"}}>{adj} </h2>
  		    <h2>{name}</h2>
  		  </div>
  	  );
  	} else if (!this.props.nickAdj || !this.props.nickNoun) {
  		content = (
  			<h2 style={{color: "#666"}}>Press the button to start generating names.</h2>
  		);
    }

    return(
		  <div>{content}</div>
	  );
  }
}

export default Nickname;