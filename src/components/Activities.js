import React, { Component } from "react";
import Activity from "./Activity";

const Activities = props => {
    const activities = props.activities.map(activity => (
	    <Activity 
	        key={activity}
	        duration={props.duration}
	        activities={props.activities}
	    />
	));   

    return (
		<div className="activities">
	       {activities}
		</div>
	);
}

export default Activities;