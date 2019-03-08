import React, { Component } from "react";

class Activities extends Component {

 //    addActivity = (duration, activity) => {
 //    }
	
	// let duration = this.props.duration;
	// let activities = this.props.activities;

	activities = () => {
		let duration = this.props.duration.map((activity) => {
		return <li>{duration}</li>
	    });
	}
    
    render() {
		return (
			<div>
			    <h3>Activities</h3>
			    <ul className="Activities">
			        <li>Act 1</li>
			        {this.activities}
			    </ul>
			</div>
		);
	}
}

export default Activities;