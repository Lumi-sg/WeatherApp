const API_KEY = "bebb8c9c18cf423fb6c70957230204";

export default async function getWeatherData(userInput) {
	try {
		const response = await fetch(
			`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${userInput}`,
			{
				mode: "cors",
			}
		);
		const data = await response.json();
		if (response.ok) {
			return data;
		} else {
			throw new Error("Failed to fetch weather data");
		}
	} catch (error) {
		document.body.style.backgroundImage = "";
		document.querySelector(".location").textContent = "Please enter a valid location name";
		const locationInput = (document.getElementById("location-input").value = "");
		throw new Error("Failed to fetch weather data");
	}
}
