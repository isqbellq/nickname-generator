import React, { Component } from "react";
import Activity from "./components/Activity";

const Activities = props => {
    return (
		<div>
	       {props.activities.map(activity => (
	       	<Activity {...activity} />
	       	))}
		</div>
	);
}

export default Activities;