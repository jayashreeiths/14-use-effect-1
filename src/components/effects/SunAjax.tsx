const API_URL = 'https://api.sunrise-sunset.org/json'

// const exempel: number[] = [1, 3, 19]
// useState<null | string>()

const SunAjax = () => {
	const fetchSunriseSunset = async (lat: number, lng: number): Promise<> => {
		const response = await fetch(API_URL, { method: 'GET' })
	}


	return (
		<section>
			<h3> Choose city </h3>
			<div>
				<button onClick={() => fetchSunriseSunset(59.3294, 18.0686)}> Stockholm </button>
			</div>
		</section>
	)
}

export default SunAjax
