import { useState } from 'react'

const API_URL = 'https://api.sunrise-sunset.org/json'

interface SunriseSunsetResponse {
	results: null | SunriseSunsetData,
	status: string
}
interface SunriseSunsetData {
	sunrise:"7:27:02 AM",
	sunset:"5:05:55 PM",
	solar_noon:"12:16:28 PM",
	day_length:"9:38:53",
	civil_twilight_begin:"6:58:14 AM",
	civil_twilight_end:"5:34:43 PM",
	nautical_twilight_begin:"6:25:47 AM",
	nautical_twilight_end:"6:07:10 PM",
	astronomical_twilight_begin:"5:54:14 AM",
	astronomical_twilight_end:"6:38:43 PM"
}

interface City {
	name: string,
	lat: number,
	lng: number
}
const cities: City[] = [
	{ name: 'Stockholm', lat: 59.3294, lng: 18.068 },
	{ name: 'Göteborg', lat: 57.7087, lng: 11.9751 },
	{ name: 'Luleå', lat: 65.584816, lng: 22.156704 }
]

// För att förbättra exemplet:
// - flytta ut interface till egna filer
// - använda "isMounted"

const SunAjax = () => {
	const [cityName, setCityName] = useState('')
	const [data, setData] = useState<null | SunriseSunsetData>(null)

	const fetchSunriseSunset = async (cityNameToFetch: string): Promise<void> => {
		const city = cities.find(c => c.name === cityNameToFetch)
		if( !city ) {
			console.log('City is undefined!');
			return;
		}

		const queryString = `?lat=${city.lat}&lng=${city.lng}`
		const url = API_URL + queryString
		// Bra för felsökning! Testa URL:en i Insomnia eller Postman
		// console.log('SunAjax fetch, url = ' + url);

		const response = await fetch(url, { method: 'GET' })
		const responseData: SunriseSunsetResponse = await response.json()
		setData(responseData.results)
		setCityName(cityNameToFetch)
		// Bra för felsökning! Kontrollera hur datan du får tillbaka ser ut
		// console.log('SunAjax fetch: data=', responseData.results);
	}


	return (
		<section>
			<h3> Choose city </h3>
			<div>
				{cities.map(city => (
					<button key={city.name} onClick={() => fetchSunriseSunset(city.name)}> {city.name} </button>
				))}
			</div>
			<p>
				{data === null ?
					'Please select a city.' :
					`The sun rose at ${data.sunrise} today in ${cityName}. It will set at ${data.sunset}.`
				}
			</p>
			<p> During summer, add +2 hours to compensate for summer time. </p>
		</section>
	)
}

export default SunAjax
