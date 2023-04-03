const API_KEY = "bebb8c9c18cf423fb6c70957230204";

export default async function getWeatherData(userInput) {
	const response = await fetch(
		`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${userInput}`,
		{
			mode: "cors",
		}
	);
	const data = await response.json();
	return data;
}