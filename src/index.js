import css from "./styles.css";
import initHTML from "./modules/initHTML";
import getWeatherData from "./modules/getWeatherData";

initHTML();

const userForm = document.querySelector(".location-form");

userForm.addEventListener("submit", async () => {
	const userInput = userForm.elements["location"].value;

	event.preventDefault();
	const country = await getWeatherData(userInput);
	console.log(country.location.country);
});
