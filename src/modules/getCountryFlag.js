export default async function getCountryFlag(weatherData) {
	try {
		const response = await fetch(
			`https://restcountries.com/v3.1/name/${encodeURIComponent(
				weatherData.location.country
			)}`
		);

		if (response.ok) {
			const data = await response.json();
			const countryEmoji = data[0].flag;
			return countryEmoji;
		} else {
			console.log("flag api call failed");
		}
	} catch (error) {
		throw new Error(`Failed to fetch flag for ${weatherData.location.country}: ${error}`);
	}
}
