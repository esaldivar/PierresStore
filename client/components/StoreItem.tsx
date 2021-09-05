import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeartBroken} from '@fortawesome/free-solid-svg-icons'
import {faHeart as farHeart} from '@fortawesome/free-regular-svg-icons'
import { useState } from 'react';


interface Item {
	name: string,
	imageUrl: string,
	price: number,
	information: string,
	season: string[]
}

const StoreItem = ({name, imageUrl, price, information, season}:Item) => {

	const [favorite, setFavorite] = useState<boolean>(false);

	const selectFavorite = () => {
		setFavorite(true);
	}

	function numberWithCommas(x:number) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}

	const actualPrice = numberWithCommas(price)
	
	return (
		<div className="storeItems">
			<div className="titleSixth favAndImage">
				<div>
					{favorite && <button><FontAwesomeIcon className="favoriteSelected" icon={faHeartBroken} size="2x"/></button>}
					{!favorite && <button onClick={selectFavorite}><FontAwesomeIcon className="favorite" icon={farHeart} size="2x"/></button>}
				</div>
				<img src={imageUrl} alt={name} />
			</div>
			<div className="titleSixth name">
				<h2>{name}</h2>
			</div>
			<div className="titleThird">
				<p>{information}</p>
			</div>
			<div className="titleSixth">
			{season.map((el, index) => {
				if(!el){
					return (
						<p key={index}>Any</p>
					)
				} else {
					return (
						<p key={index}>{el}</p>
					)
				}
			})}
			</div>
			<div className="titleTwelve">
				<p className="price">{actualPrice}<img src="https://pierresstore.s3.us-east-2.amazonaws.com/Gold+(1).png"></img></p>
			</div>
			<div className="titleTwelve addCart">
				<button className="addButton">Add To Cart</button>
			</div>
		</div>
	)
}

export default StoreItem;