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
const location = userForm.elements["location"];

userForm.addEventListener("submit", async (event) => {
	event.preventDefault();

	loadTheToad();

	try {
		const weatherData = await getWeatherData(location.value);
		updateCurrent(weatherData);
	} catch (error) {
		console.log(error);
	}

	document.body.style.backgroundImage = "";
});
