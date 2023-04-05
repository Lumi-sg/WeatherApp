export default async function getCountryFlag(weatherData) {
	try {
		const response = await fetch(
			`https://restcountries.com/v3.1/name/${encodeURIComponent(
				weatherData.location.country
			)}`
		);
		const data = await response.json();
		const countryEmoji = data[0].flag;
		if (response.ok) {
			return countryEmoji;
		} else {
			console.log("flag api call failed: " + response);
		}
	} catch (error) {
		console.log(error);
	}
}
