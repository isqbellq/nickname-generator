import React, { Component } from "react";

const Activity = props => {
	return (
		<div className="activity">
		    <input type="checkbox" />
            <p>Duration: {props.duration}. Activity: {props.activity}.</p>
        </div>
	);
}

export default Activity;