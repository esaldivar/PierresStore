import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';


const StoreTitleBar = () => {
	return (
		<div className="storeTitle">
			<div className="titleSixth">
				<h3>Image</h3>
			</div>
			<div className="titleSixth titleName">
				<h3>Product Name</h3>
				<div>
					<div>
						<a onClick={()=>{console.log('product')}}><FontAwesomeIcon className="searchIcon" icon={faCaretUp}/></a>
					</div>
					<div>
						<FontAwesomeIcon className="searchIcon" icon={faCaretDown}/>
					</div>
				</div>
			</div>
			<div className="titleThird">
				<h3>Item Description</h3>
			</div>
			<div  className="titleSixth titleName">
				<h3>Season</h3>
				<div>
					<div>
						<FontAwesomeIcon className="searchIcon" icon={faCaretUp} />
					</div>
					<div>
						<FontAwesomeIcon className="searchIcon" icon={faCaretDown} />
					</div>
				</div>
			</div>
			<div className="titleTwelve titlePrice">
				<h3>Price</h3>
				<div>
					<div>
						<FontAwesomeIcon className="searchIcon" icon={faCaretUp} />
					</div>
					<div>
						<FontAwesomeIcon className="searchIcon" icon={faCaretDown} />
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