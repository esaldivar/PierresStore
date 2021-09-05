import { useContext} from "react";
import StoreTitleBar from "../components/StoreTitleBar";
import StoreItem from "../components/StoreItem";
import './StoreItem.scss';
import { StoreContext } from "./App";


const Store = () => {
	
	const {store} = useContext<any>(StoreContext)

	return (
		<div className="storeContainer">
			<StoreTitleBar/>
			<div className="inventoryContainer">
			{store.map((el:any, index:number) => {
				return (
					<StoreItem key={index} name={el.product_name} imageUrl={el.image_url} season={el.season} price={el.price} information={el.information} />
				)
			})}
			</div>
		</div>
	)
}

export default Store;