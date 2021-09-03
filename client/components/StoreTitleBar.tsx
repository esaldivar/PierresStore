import { useContext } from 'react';
import { StoreContext } from '../containers/App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const StoreTitleBar = () => {

	const {store, getStore} = useContext<any>(StoreContext)

	const alpha = () => {
		getStore([...store].sort((a:any,b:any) => {
			const nameA = a.product_name.toUpperCase();
			const nameB = b.product_name.toUpperCase();
			return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
		}))
	}

	const reverseAlpha = () => {
		getStore([...store].sort((a:any,b:any) => {
			const nameA = a.product_name.toUpperCase();
			const nameB = b.product_name.toUpperCase();
			return (nameA > nameB) ? -1 : (nameA < nameB) ? 1 : 0;
		}))
	}

	const lowPrice = () => {
		getStore([...store].sort((a:any,b:any) => {
			const priceA = parseInt(a.price);
			const priceB = parseInt(b.price);
			return (priceA < priceB) ? -1 : (priceA > priceB) ? 1 : 0;
		}))
	}

	const highPrice = () => {
		getStore([...store].sort((a:any,b:any) => {
			const priceA = parseInt(a.price);
			const priceB = parseInt(b.price);
			return (priceA > priceB) ? -1 : (priceA < priceB) ? 1 : 0;
		}))
	}

	return (
		<div className="storeTitle">
			<div className="titleSixth">
				<h3>Image</h3>
			</div>
			<div className="titleSixth titleName">
				<h3>Product Name</h3>
				<div>
					<div>
						<button onClick={alpha}><FontAwesomeIcon className="searchIcon" icon={faCaretUp} size="2x" /></button>
					</div>
					<div>
						<button onClick={reverseAlpha}><FontAwesomeIcon className="searchIcon" icon={faCaretDown} size="2x"/></button>
					</div>
				</div>
			</div>
			<div className="titleThird">
				<h3>Item Description</h3>
			</div>
			<div  className="titleSixth titleName">
				<h3>Season</h3>
			</div>
			<div className="titleTwelve titlePrice">
				<h3>Price</h3>
				<div>
					<div>
					<button onClick={lowPrice}><FontAwesomeIcon className="searchIcon" icon={faCaretUp} size="2x"/></button>
					</div>
					<div>
					<button onClick={highPrice}><FontAwesomeIcon className="searchIcon" icon={faCaretDown} size="2x"/></button>
					</div>
				</div>
			</div>
			<div className="titleTwelve">
				<h3>Add to Cart</h3>
			</div>
		</div>

	)
};

export default StoreTitleBar;