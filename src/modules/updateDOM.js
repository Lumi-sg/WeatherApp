import getCountryFlag from "./getCountryFlag";

export default async function updateCurrent(weatherData) {
	const countryFlag = await getCountryFlag(weatherData);
	const locationText = `${weatherData.location.name} , ${weatherData.location.country} ${
		countryFlag || ""
	}`;
	document.querySelector(".location").textContent = locationText;
	document.querySelector("#current-icon").src = weatherData.current.condition.icon;
	document.querySelector("#current-temp").textContent = `${weatherData.current.temp_c}°C`;
	document.querySelector("#current-condition").textContent = weatherData.current.condition.text;
	const locationInput = (document.getElementById("location-input").value = "");
	console.log("upDateCurrent.js: DOM updated");
}
