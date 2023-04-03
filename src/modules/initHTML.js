const initHTML = () => {
	// create elements
	const body = document.querySelector("body");
	const container = document.createElement("div");
	const heading = document.createElement("h1");
	const form = document.createElement("form");
	const label = document.createElement("label");
	const input = document.createElement("input");
	const button = document.createElement("button");
	const currentConditions = document.createElement("div");
	const currentIcon = document.createElement("img");
	const currentTemp = document.createElement("p");
	const currentCondition = document.createElement("p");
	const todayForecast = document.createElement("div");
	const todayHeading = document.createElement("h2");
	const todayIcon = document.createElement("img");
	const todayHigh = document.createElement("p");
	const todayLow = document.createElement("p");
	const todayCondition = document.createElement("p");
	const tomorrowForecast = document.createElement("div");
	const tomorrowHeading = document.createElement("h2");
	const tomorrowIcon = document.createElement("img");
	const tomorrowHigh = document.createElement("p");
	const tomorrowLow = document.createElement("p");
	const tomorrowCondition = document.createElement("p");

	// set attributes and text content
	heading.textContent = "Weather";
	label.setAttribute("for", "location-input");
	label.textContent = "Enter your location:";
	input.setAttribute("type", "text");
	input.setAttribute("id", "location-input");
	input.setAttribute("name", "location");
	button.setAttribute("type", "submit");
	button.textContent = "Search";
	currentConditions.setAttribute("id", "current-conditions");
	currentIcon.setAttribute("id", "current-icon");
	currentTemp.setAttribute("id", "current-temp");
	currentCondition.setAttribute("id", "current-condition");
	todayForecast.setAttribute("id", "todays-forecast");
	todayHeading.textContent = "Today's Forecast";
	todayIcon.setAttribute("id", "today-icon");
	todayHigh.setAttribute("id", "today-high");
	todayLow.setAttribute("id", "today-low");
	todayCondition.setAttribute("id", "today-condition");
	tomorrowForecast.setAttribute("id", "tomorrows-forecast");
	tomorrowHeading.textContent = "Tomorrow's Forecast";
	tomorrowIcon.setAttribute("id", "tomorrow-icon");
	tomorrowHigh.setAttribute("id", "tomorrow-high");
	tomorrowLow.setAttribute("id", "tomorrow-low");
	tomorrowCondition.setAttribute("id", "tomorrow-condition");

	// append elements to the container
	form.appendChild(label);
	form.appendChild(input);
	form.appendChild(button);
	currentConditions.appendChild(currentIcon);
	currentConditions.appendChild(currentTemp);
	currentConditions.appendChild(currentCondition);
	todayForecast.appendChild(todayHeading);
	todayForecast.appendChild(todayIcon);
	todayForecast.appendChild(todayHigh);
	todayForecast.appendChild(todayLow);
	todayForecast.appendChild(todayCondition);
	tomorrowForecast.appendChild(tomorrowHeading);
	tomorrowForecast.appendChild(tomorrowIcon);
	tomorrowForecast.appendChild(tomorrowHigh);
	tomorrowForecast.appendChild(tomorrowLow);
	tomorrowForecast.appendChild(tomorrowCondition);
	container.appendChild(heading);
	container.appendChild(form);
	container.appendChild(currentConditions);
	container.appendChild(todayForecast);
	container.appendChild(tomorrowForecast);

	// add container to the page
	body.appendChild(container);
};

export { initHTML };
