import css from "./styles.css";
import initHTML from "./modules/initHTML";
import getWeatherData from "./modules/getWeatherData";
import updateCurrent from "./modules/updateDOM";
import loadTheToad from "./modules/loadTheToad";

initHTML();

window.onload = async () => {
	try {
		const DEFAULT_WEATHER = await getWeatherData("Toronto");
		updateCurrent(DEFAULT_WEATHER);
	} catch (error) {
		console.log(error);
	}
};

const userForm = document.querySelector(".location-form");

userForm.addEventListener("submit", async () => {
	event.preventDefault();
	const userInput = userForm.elements["location"].value;

	if (!userInput.trim()) {
		alert("Please enter a location");
		return;
	}

	if (!isNaN(userInput)) {
		alert("Please enter a valid location name");
		return;
	}

	loadTheToad();

	const weatherData = await getWeatherData(userInput);
	updateCurrent(weatherData);

	document.body.style.backgroundImage = "";
});
