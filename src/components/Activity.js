import React, { Component } from "react";

const Activity = props => {
	return (
		<div>{props.duration}, {props.activities}</div>
	);
}

export default Activity;