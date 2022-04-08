import {useParams, useHistory} from "react-router-dom";

export default function Movie () {
	const value = useParams()
	const {goBack} = useHistory()
	return (
		<>
			<h1>Hello from Movie page</h1>
			<button className="btn" onClick={goBack}>Go back</button>
		</>
	)
}