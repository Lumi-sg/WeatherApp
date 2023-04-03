import css from "./styles.css";
import initHTML from "./modules/initHTML";
import getWeatherData from "./modules/getWeatherData";
import updateCurrent from "./modules/updateCurrent";

initHTML();

const userForm = document.querySelector(".location-form");

userForm.addEventListener("submit", async () => {
	const userInput = userForm.elements["location"].value;

	event.preventDefault();
	const weatherData = await getWeatherData(userInput);
	updateCurrent(weatherData);
	console.log(weatherData);
});
