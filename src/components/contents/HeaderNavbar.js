// Styles

import { HeaderNavbarContainer, HeaderNavbarLinks } from "../../styles/Content";

const HeaderNavbar = () => {
	return (
		<HeaderNavbarContainer>
			<HeaderNavbarLinks>
				<h3 className="active">Efficiency</h3>
				<h3>Volume</h3>
				<h3>Customer Satisfaction</h3>
				<h3>Backlog</h3>
			</HeaderNavbarLinks>
		</HeaderNavbarContainer>
	);
};

export default HeaderNavbar;
