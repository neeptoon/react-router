import CategoryItem from "./CategoryItem";
import Search from './Search';


export default function CategoryList(props) {
	const {catalog, cb} = props;
	return (
		<>
			<Search cb={cb}/>
			<div className="list">
				{catalog.map(item => <CategoryItem key={item.idCategory} category={item}/>)}
			</div>
		</>
	)

}