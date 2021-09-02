
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
				<p className="price">{price}<img src="https://pierresstore.s3.us-east-2.amazonaws.com/Gold+(1).png"></img></p>
			</div>
			<div className="titleTwelve addCart">
				<p>{quantity}</p>
			</div>
		</div>
	)
}

export default StoreItem;