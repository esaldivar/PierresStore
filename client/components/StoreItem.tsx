
interface Item {
	name: string,
	imageUrl: string,
	price: string,
	information: string,
	quantity: string
}

const StoreItem = ({name, imageUrl, price, information, quantity}:Item) => {
	return (
		<div className="storeItems">
			<h1>{name}</h1>
			<img src={imageUrl} alt={name} />
			<p>{information}</p>
			<p>Price: {price} gold</p>
			<p>{quantity}</p>
		</div>
	)
}

export default StoreItem;