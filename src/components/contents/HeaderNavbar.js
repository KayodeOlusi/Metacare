import styled from "styled-components";

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

const HeaderNavbarContainer = styled.div`
	display: flex;
	align-items: center;
	border-bottom: 1px solid #ecebf5;
	font-family: "Gelion Regular", sans-serif;
`;

const HeaderNavbarLinks = styled.div`
	display: flex;
	justify-content: space-between;
	margin-left: 40px;

	> .active {
		color: #060213;
		font-weight: 900;
		border-bottom: 2px solid #6837ef;
	}

	> h3 {
		margin-right: 40px;
		font-size: 16px;
		text-align: left;
		color: #696d8c;
		font-weight: 400;
		padding-top: 18px;
		padding-bottom: 18px;
		cursor: pointer;
	}
`;

export default HeaderNavbar;
