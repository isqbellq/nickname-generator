import React, { Component } from "react";

const Activity = props => {
	return (
		<li>{props.start}, {props.end}, {props.activity}</li>
	);
}

export default Activity;