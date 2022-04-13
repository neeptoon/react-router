import {useState} from "react";

export default function Search({cb}) {
	const [value, setValue] = useState('');

	const handleKey = (evt) => {
		if (evt.key === "Enter") {
			handleSubmit()
		}
	}

	const handleSubmit = () => {
		cb(value)
	}

	return (
		<div className="row">
			<div className="input-field col s12">
				<input type="search"
				onChange={(evt) => {setValue(evt.target.value)}}
				onKeyDown={handleKey}
				value={value}
				placeholder='Найти'/>
				<button className="btn" onClick={handleSubmit}>Найти</button>
			</div>
		</div>
	)
}