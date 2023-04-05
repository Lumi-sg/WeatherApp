export default async function updateCurrent(weatherData) {
	const location = (document.querySelector(".location").textContent =
		weatherData.location.name + " , " + weatherData.location.country);
	const currentImage = (document.querySelector("#current-icon").src =
		weatherData.current.condition.icon);
	const currentTemp = (document.querySelector("#current-temp").textContent =
		weatherData.current.temp_c + "°C");
	const currentCondition = (document.querySelector("#current-condition").textContent =
		weatherData.current.condition.text);
	const locationInput = document.getElementById("location-input");
	locationInput.value = "";
	console.log("upDateCurrent.js: DOM updated");
}
