import React, { Component } from "react";
import Activity from "./Activity";

const Activities = props => {
    return (
		<div className="activities">
	       {props.activities.map(activity => (
	       	<Activity 
	       	    duration={props.duration}
	       	    activities={props.activities}
	       	    key={activity}
	       	/>
	       	))}
		</div>
	);
}

export default Activities;