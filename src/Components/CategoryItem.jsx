import {Link} from 'react-router-dom'

export default function CategoryItem (props) {
	const {strCategory, strCategoryThumb, strCategoryDescription} = props.category;
	return (
		<div className="card">
			<div className="card-image">
				<img src={strCategoryThumb}/>
			</div>
			<div className="card-content">
				<span className="card-title">{strCategory}</span>
				<p>{strCategoryDescription.slice(0, 60)}...</p>
			</div>
			<div className="card-action">
				<Link to={`/category/${strCategory}`} className="btn">Смотреть категории</Link>
			</div>
		</div>
	)
}