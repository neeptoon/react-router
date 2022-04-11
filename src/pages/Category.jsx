import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {getFilteredCategories} from "../api";
import Preloader from "../Components/Preloder";
import MealsList from "../Components/MealsList";

export default function Category() {
	const {name} = useParams();
	const [meals, setMeals] = useState([]);

	useEffect(() => {
		getFilteredCategories(name).then((data) => {
			setMeals(data.meals)})
	}, [name])
	return <>
		{!meals.length ? <Preloader/> : <MealsList meals={meals}/>}
	</>




}