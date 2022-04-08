import {API_URL} from "./config";

const getMealById = async (id) => {
	const response = await fetch(API_URL + 'lookup.php?i=' + id);
	return await response.json();
}

const getAllCategories = async () => {
	const response = await fetch(API_URL + 'categories.php');
	return await response.json();
}

const getFilteredCategories = async (category) => {
	const response = await fetch(API_URL + 'filter.php?c=' + category);
	return await response.json();
}

export {getMealById, getAllCategories, getFilteredCategories}