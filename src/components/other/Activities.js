import React, { Component } from "react";
import Activity from "./Activity";

const Activities = props => {

	// props.activities.map(...) but actually need to map both activities AND duration
    const activities = props.activities.map(activity => (
	    <Activity 
	        key={activity}
	        duration={props.duration}
	        activity={activity}
	    />
	));   

    return (
		<div className="activities">
	       {activities}
		</div>
	);
}

export default Activities;
