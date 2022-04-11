import Meal from './Meal'
import {useHistory} from "react-router-dom";


export default function MealsList({meals}) {
	const {goBack} = useHistory();
	return <>
		<button className="btn" onClick={goBack}>Назад</button>
		<div className='list'>
			{meals.map(meal => <Meal key={meal.idMeal} {...meal} />) }
		</div>
	</>

}