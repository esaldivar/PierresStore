import './NavBar.sass';

const NavBar = () => {
	return (
		<div className="navBar">
			<ul>
				<li><img className="pierreIcon" src="https://pierresstore.s3.us-east-2.amazonaws.com/Pierre.png"/></li>
				<li>Favorites</li>
				<li>In Season</li>
				<li>Search Bar</li>
				<li>User Icon</li>
				<li><a href="https://sass-lang.com/guide"><img className="shoppingCartIcon"src="https://pierresstore.s3.us-east-2.amazonaws.com/Traveling_Cart.png"/></a></li>
			</ul>
		</div>
	)
};

export default NavBar;