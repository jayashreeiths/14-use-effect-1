import { useState, useEffect } from 'react'

const Clock = () => {
	const [time, setTime] = useState(0)
	const INTERVAL = 100


	// // Closure
	useEffect(() => {
		const intervalId = setInterval(() => {
			setTime(oldTime => oldTime + INTERVAL/1000)
		}, INTERVAL)

		const cancelFunction = () => clearInterval(intervalId)
		return cancelFunction
	}, [])

	return (
		<div>
		Visible for {time.toFixed(1)} seconds. <br/>
		TODO: button to start/stop timer
		</div>
	)
}

export default Clock
