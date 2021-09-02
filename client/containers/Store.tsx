import { useEffect, useState } from "react";
import StoreTitleBar from "../components/StoreTitleBar";
import StoreItem from "../components/StoreItem";
import './StoreItem.scss';
import axios from "axios";


const Store = () => {
	const [store, getStore] = useState<any>([]);

	useEffect(() => {
		axios.get('/api/inventory')
		.then((res)=>{
			getStore(res.data.sort((a:any,b:any) => {
				const nameA = a.product_name.toUpperCase();
				const nameB = b.product_name.toUpperCase();
				return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
			}));
		}).catch((err)=> {
			console.log(err);
		});
	}, [])


	return (
		<div className="storeContainer">
			<StoreTitleBar/>
			<div className="inventoryContainer">
			{store?.map((el:any, index:number) => {
				return (
					<StoreItem key={index} name={el.product_name} imageUrl={el.image_url} season={el.season} price={el.price} information={el.information} quantity={el.quantity}/>
				)
			})}
			</div>
		</div>
	)
}

export default Store;