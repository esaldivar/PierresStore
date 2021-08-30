
interface Item {
	name: string,
	imageUrl: string,
	price: string,
	information: string,
	season: string[],
	quantity: string
}

const StoreItem = ({name, imageUrl, price, information, season,quantity}:Item) => {
	
	return (
		<div className="storeItems">
			<div className="titleSixth">
				<img src={imageUrl} alt={name} />
			</div>
			<div className="titleSixth">
				<h2>{name}</h2>
			</div>
			<div className="titleThird">
				<p>{information}</p>
			</div>
			<div className="titleSixth">
			{season.map((el, index) => {
				if(!el){
					return (
						<p>Any</p>
					)
				} else {
					return (
						<p key={index}>{el}</p>
					)
				}
			})}
			</div>
			<div className="titleTwelve">
				<p>{price} gold</p>
			</div>
			<div className="titleTwelve">
				<p>{quantity}</p>
			</div>
		</div>
	)
}

export default StoreItem;