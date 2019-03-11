import React, { Component } from "react";
import Activity from "./Activity";

const Activities = props => {
    return (
		<div className="activities">
	       {props.activities.map(activity => (
	       	<Activity key={activity} {...activity} />
	       	))}
		</div>
	);
}

export default Activities;