import { useEffect, useState } from 'react'

const ChangeTitle = () => {
	const [changeTitle, setChangeTitle] = useState(false)
	console.log('ChangeTitle');
	const [title/*, setTitle*/] = useState('useEffect demo')


	useEffect(() => {
		console.log('ChangeTitle useEffect');
		if( changeTitle ) {
			console.log('ChangeTitle useEffect change=true');
			document.title = title
			setChangeTitle(false)
		}
	}, [changeTitle, title])

	return (
		<div>
			<button onClick={() => setChangeTitle(true)}> Set title to "useEffect demo" </button>
		</div>
	)
}

export default ChangeTitle
