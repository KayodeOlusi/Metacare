// Icons
import { BiBell } from "react-icons/bi";
import { BsCircle } from "react-icons/bs";
import { RiNumber3 } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
// Styles
import {
	HeaderContainer,
	HeaderIcons,
	HeaderNotification,
	HeaderProfile,
	HeaderSearch,
} from "../../styles/Content";

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

export default Header;
