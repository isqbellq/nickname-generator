import React, { Component } from "react";
import Activity from "./Activity";

const Activities = props => {
    return (
		<ul>
	       {props.activities.map(activity => (
	       	<Activity {...activity} />
	       	))}
		</ul>
	);
}

export default Activities;