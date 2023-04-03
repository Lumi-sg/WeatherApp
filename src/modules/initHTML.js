export default function initHTML() {
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

	// set attributes and text content
	heading.classList.add("location");
	heading.textContent = "Weather";
	label.setAttribute("for", "location-input");
	label.textContent = "";
	input.setAttribute("type", "text");
	input.setAttribute("id", "location-input");
	input.setAttribute("name", "location");
	input.setAttribute("placeholder", "Enter your location");
	button.setAttribute("type", "submit");
	button.textContent = "Go!";
	button.classList.add("submit");
	currentConditions.setAttribute("id", "current-conditions");
	currentIcon.setAttribute("id", "current-icon");
	currentTemp.setAttribute("id", "current-temp");
	currentCondition.setAttribute("id", "current-condition");

	// append elements to the container

	currentConditions.appendChild(currentIcon);
	currentConditions.appendChild(currentTemp);
	currentConditions.appendChild(currentCondition);
	container.appendChild(heading);

	container.appendChild(currentConditions);
	container.appendChild(form);
	form.appendChild(label);
	form.appendChild(input);
	form.appendChild(button);
	form.classList.add("location-form");

	// add container to the page
	body.appendChild(container);
}
