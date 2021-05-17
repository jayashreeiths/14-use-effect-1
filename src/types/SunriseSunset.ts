interface SunriseSunsetResponse {
	results: null | SunriseSunsetData,
	status: string
}

interface SunriseSunsetData {
	sunrise: string, //"7:27:02 AM",
	sunset: string, //"5:05:55 PM",
	solar_noon: string, //"12:16:28 PM",
	day_length: string, //"9:38:53",
	civil_twilight_begin: string, //"6:58:14 AM",
	civil_twilight_end: string, //"5:34:43 PM",
	nautical_twilight_begin: string, //"6:25:47 AM",
	nautical_twilight_end: string, //"6:07:10 PM",
	astronomical_twilight_begin: string, //"5:54:14 AM",
	astronomical_twilight_end: string //"6:38:43 PM"
}

export type { SunriseSunsetResponse, SunriseSunsetData }
