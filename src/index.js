import css from "./styles.css";
import initHTML from "./modules/initHTML";
import getWeatherData from "./modules/getWeatherData";
import updateCurrent from "./modules/updateCurrent";

initHTML();

window.onload = async () => {
	const DEFAULT_WEATHER = await getWeatherData("Toronto");
	console.log(DEFAULT_WEATHER);
	updateCurrent(DEFAULT_WEATHER);
};

const userForm = document.querySelector(".location-form");

userForm.addEventListener("submit", async () => {
	const userInput = userForm.elements["location"].value;
	const hypnogod = new Image();

	hypnogod.src = "https://media.tenor.com/r5FOkTjCCfMAAAAC/hypnotoad-futurama.gif";
	document.body.style.backgroundImage = "url('" + hypnogod.src + "')";
	const location = (document.querySelector(".location").textContent = "...Loading");
	event.preventDefault();
	const weatherData = await getWeatherData(userInput);
	updateCurrent(weatherData);
	document.body.style.backgroundImage = "";
	console.log(weatherData);
});
