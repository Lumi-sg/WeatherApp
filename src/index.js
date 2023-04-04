import css from "./styles.css";
import initHTML from "./modules/initHTML";
import getWeatherData from "./modules/getWeatherData";
import updateCurrent from "./modules/updateCurrent";

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
	console.log(userInput);
	if (userInput.length >= 25 || userInput.length === 0) {
		const location = (document.querySelector(".location").textContent =
			"Please enter a valid location");
		const locationInput = document.getElementById("location-input");
		locationInput.value = "";
	} else {
		try {
			const hypnogod = new Image();

			hypnogod.src = "https://media.tenor.com/r5FOkTjCCfMAAAAC/hypnotoad-futurama.gif";
			document.body.style.backgroundImage = "url('" + hypnogod.src + "')";
			const location = (document.querySelector(".location").textContent = "...Loading");
			const weatherData = await getWeatherData(userInput);
			updateCurrent(weatherData);
			document.body.style.backgroundImage = "";
		} catch (error) {
			console.log(error);
			const location = (document.querySelector(".location").textContent =
				"Please enter a valid location");
		}
	}
});
