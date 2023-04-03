import css from "./styles.css";
import initHTML from "./modules/initHTML";
import getWeatherData from "./modules/getWeatherData";
import updateCurrent from "./modules/updateCurrent";

initHTML();

const userForm = document.querySelector(".location-form");

userForm.addEventListener("submit", async () => {
	const userInput = userForm.elements["location"].value;
	const hypnogod = new Image();

	hypnogod.src = "https://media.tenor.com/r5FOkTjCCfMAAAAC/hypnotoad-futurama.gif";
	document.body.style.backgroundImage = "url('" + hypnogod.src + "')";
	const location = (document.querySelector(".location").textContent = "...Loading");
	event.preventDefault();
	const weatherData = await getWeatherData(userInput);
	document.body.style.backgroundImage = "";
	updateCurrent(weatherData);
	console.log(weatherData);
});
