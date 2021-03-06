import './NavBar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';



const NavBar = () => {
	return (
		<div className="navBar">
			<div className="iconDiv">
				<img className="pierreIcon" src="https://pierresstore.s3.us-east-2.amazonaws.com/Pierre.png"/>
				<h4>Pierre's Store</h4>
			</div>
			<div>
				<a href=""><h4>Favorites</h4></a>
			</div>
			<div>
				<a href=""><h4>In Season</h4></a>
			</div>
			<div className="search">
				<FontAwesomeIcon className="searchIcon" icon={faSearch} size="xs"/>	
				<input className="navSearch" type="search" name="search" placeholder="Search Pierre's Store" id="searchInput" autoComplete="off"/>	
			</div>
			<div>
				<a href="https://sass-lang.com/guide"><img className="shoppingCartIcon"src="https://pierresstore.s3.us-east-2.amazonaws.com/Traveling_Cart.png"/></a>
			</div>
				
		</div>
	)
};

export default NavBar;