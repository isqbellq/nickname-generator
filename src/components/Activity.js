import React, { Component } from "react";

const Activity = props => {
	return (
		<div className="activity">
            <li>Duration: {props.duration}. Activity: {props.activity}.</li>
        </div>
	);
}

export default Activity;