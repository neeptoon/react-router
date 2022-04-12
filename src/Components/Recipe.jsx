import {useEffect, useState} from "react";
import {useParams, useHistory} from "react-router-dom";
import {getMealById} from "../api";
import Preloader from "./Preloder";

export default function Recipe() {

	const {id} = useParams();
	const {goBack} = useHistory();
	const [meal, setMeal] = useState({})

	useEffect(() => {
		getMealById(id).then(data => setMeal(data.meals[0]))

	}, [id])

	return (
		<>
			{!meal.idMeal ? <Preloader/> : <div className="recipe">
				<img src={meal.strMealThumb} alt=""/>
				<h1>Название: {meal.strMeal}</h1>
				<h5>Категория: {meal.strCategory}</h5>
				{meal.strArea && <h5>Страна происхождения: {meal.strArea}</h5>}
				<p>{meal.strInstructions}</p>
				<table className="centered">
					<thead>
						<tr>
							<th>Ingredients</th>
							<th>Measure</th>
						</tr>
					</thead>
					<tbody>
					{Object.keys(meal).map(key => {
						if(key.includes('Ingredient') && meal[key]) {
							return (
								<tr key={key}>
									<td>{meal[key]}</td>
									<td>{
										meal[`strMeasure${key.slice(13)}`]
									}</td>
								</tr>
							)
						}
						return null;
					})}
					</tbody>
				</table>
				{meal.strYoutube &&
					<div className="row">
						<h5>Видео</h5>
						<iframe src={`https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}`} frameBorder="0" allowFullScreen/>
					</div>}
			</div>}
			<button className="btn" onClick={goBack}>Назад</button>
		</>
	)
}