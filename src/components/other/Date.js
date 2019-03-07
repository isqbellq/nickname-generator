import React, { Component } from "react";

class CurrentDate extends Component {
	render() {
		const today = new Date();
		const day = today.getDate() < 10 ? `0${today.getDate()}` : today.getDate();
		const month = (today.getMonth() + 1) < 10 ? `0${today.getMonth()}` : today.getMonth();;
		const year = today.getFullYear();

		const todayFull = `${day}/${month}/${year}`;

		let dayOfWeek = "";
		if (today.getDay() === 0) {
			dayOfWeek = "Sunday";
	    }
	    if (today.getDay() === 1) {
			dayOfWeek = "Monday";
	    }
	    if (today.getDay() === 2) {
			dayOfWeek = "Tuesday";
	    }
	    if (today.getDay() === 3) {
			dayOfWeek = "Wednesday";
	    }
	    if (today.getDay() === 4) {
			dayOfWeek = "Thursday";
	    }
	    if (today.getDay() === 5) {
			dayOfWeek = "Friday";
	    }
		if (today.getDay() === 6) {
			dayOfWeek = "Saturday";
	    }

		return (
			<div className="today">
			    <h1>Hello, today's date is:</h1>
			    <p>{todayFull} and it is a {dayOfWeek}</p>
			</div>
			);
	}
}

export default CurrentDate;