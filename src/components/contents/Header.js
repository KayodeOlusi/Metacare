import styled from "styled-components";
// Icons
import { BiBell } from "react-icons/bi";
import { BsCircle } from "react-icons/bs";
import { RiNumber3 } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";

const Header = () => {
	return (
		<HeaderContainer>
			<HeaderSearch>
				<input type="text" placeholder="Ask us any question" />
				<FiSearch className="header__searchicon" />
			</HeaderSearch>
			<HeaderIcons>
				<HeaderNotification>
					<BiBell className="header__bell" />
					<RiNumber3 className="header__three" />
				</HeaderNotification>
				<HeaderProfile>
					<BsCircle className="header__circle" />
					<MdKeyboardArrowDown className="header__arrow" />
				</HeaderProfile>
			</HeaderIcons>
		</HeaderContainer>
	);
};

const HeaderContainer = styled.div`
	height: 78px;
	display: flex;
	position: sticky;
	align-items: center;
	justify-content: space-between;
	border-bottom: 1px solid #ecebf5;
`;

const HeaderSearch = styled.div`
	> input {
		font-size: 16px;
		line-height: 26px;
		font-family: "Gelion Regular", sans-serif;
		height: 54px;
		color: #a3a3c2;
		padding-left: 16px;
		width: 441px;
		margin-left: 40px;
		outline: none;
		border: none;
		border-radius: 10px;
		background-color: #fafafc;
	}

	> .header__searchicon {
		color: #a3a3c2;
		margin-left: -40px;
	}
`;

const HeaderIcons = styled.div`
	display: flex;
	align-items: center;
	margin-right: 40px;
	border: 1px solid #ecebf5;
	border-radius: 10px;
`;

const HeaderNotification = styled.div`
	height: 24px;
	display: flex;
	align-items: center;
	border-right: 1px solid #ecebf5;
	padding: 10px 24px 10px 14px;

	> .header__bell {
		color: #92929d;
		padding-right: 2px;
	}

	> .header__three {
		color: #fff;
		width: 8px;
		height: 10px;
		border-radius: 4px;
		background-color: #f25a68;
		padding: 2px;
	}
`;

const HeaderProfile = styled.div`
	display: flex;
	align-items: center;
	padding: 10px 8px 10px 24px;

	> .header__circle {
		width: 32px;
		height: 32px;
		color: #6837ef;
		padding-right: 2px;
	}
`;

export default Header;
