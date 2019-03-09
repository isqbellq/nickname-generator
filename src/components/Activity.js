import React, { Component } from "react";

const Activity = props => {
	return (
		<li>{props.duration}, {props.activity}</li>
	);
}

export default Activity;