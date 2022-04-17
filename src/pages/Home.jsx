import {useState, useEffect} from "react";
import {useHistory, useLocation} from "react-router-dom";
import {getAllCategories} from '../api';
import Preloader from "../Components/Preloder";
import CategoryList from "../Components/CategoryList";

export default function Home () {
	const [catalog, setCatalog] = useState([]);
	const [filteredCatalog, setFilteredCatalog] = useState([])
	const {path, search} = useLocation();
	const {push} = useHistory();


	const handleSearch = (str) => {
		setFilteredCatalog(catalog.filter(item => item.strCategory.toLowerCase().includes(str.toLowerCase())));
		push({
			path,
			search: `?search=${str}`
		})
	}


	useEffect(() => {
		getAllCategories().then(data => {
			setCatalog(data.categories)
			setFilteredCatalog(search ? data.categories.filter(item => item.strCategory.toLowerCase().includes(search.split('=')[1].toLowerCase())) : data.categories)
		})
	}, [search])
	return (
		<>
			{!catalog.length ? <Preloader/> : <CategoryList catalog={filteredCatalog} cb={handleSearch}/>}
		</>

	)
}