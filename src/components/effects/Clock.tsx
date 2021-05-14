import { useState, useEffect } from 'react'

const Clock = () => {
	const [time, setTime] = useState(0)
	const INTERVAL = 100


	// // Closure
	useEffect(() => {
		if( time === 0 ) {
			setInterval(() => {
				setTime(oldTime => oldTime + INTERVAL/1000)
			}, INTERVAL)
		}
	}, [time])

	return (
		<div>
		Visible for {time.toFixed(1)} seconds.
		</div>
	)
}

export default Clock
