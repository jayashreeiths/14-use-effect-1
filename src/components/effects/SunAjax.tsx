import { useState } from 'react'
import { useMountedRef } from '../../hooks/useMountedRef'
import { City } from '../../types/City'
import { SunriseSunsetResponse, SunriseSunsetData } from '../../types/SunriseSunset'

const API_URL = 'https://api.sunrise-sunset.org/json'


const cities: City[] = [
	{ name: 'Stockholm', lat: 59.3294, lng: 18.068 },
	{ name: 'Göteborg', lat: 57.7087, lng: 11.9751 },
	{ name: 'Luleå', lat: 65.584816, lng: 22.156704 }
]




const SunAjax = () => {
	const [cityName, setCityName] = useState('')
	const [data, setData] = useState<null | SunriseSunsetData>(null)
	const isMounted = useMountedRef()

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

		// Se upp! Komponenten kanske inte längre är MOUNTED
		// Kontrollera att komponenten finns innan vi ändrar state
		// Tidigare fanns funktionen: isMounted()
		if( isMounted.current ) {
			setData(responseData.results)
			setCityName(cityNameToFetch)
		}
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
