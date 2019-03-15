import React, { Component } from "react";

const Activity = props => {

	const style = {
		fontStyle: "italic",
	}
	return (
		<div className="activity">
            <li style={style}>Duration: {props.duration}. Activity: {props.activity}.</li>
        </div>
	);
}

export default Activity;