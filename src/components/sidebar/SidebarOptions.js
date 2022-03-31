import { useState } from "react";
import styled from "styled-components";
// Icons
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";

const SidebarOptions = ({ Icon, title, options }) => {
	const [showMenu, setShowMenu] = useState(false);

	return (
		<SidebarOption>
			<SidebarOptionContent onClick={() => setShowMenu(!showMenu)}>
				<SidebarOptionContainer>
					{Icon && <Icon className={showMenu ? "sidebar__icon" : ""} />}
					{Icon ? (
						<h1 className={showMenu ? "sidebar__title" : ""}>{title}</h1>
					) : (
						<SidebarOptionName>{title}</SidebarOptionName>
					)}
				</SidebarOptionContainer>
				{showMenu ? <StyledArrowDown /> : <StyledArrowRight />}
			</SidebarOptionContent>

			{showMenu && (
				<SidebarMenuOptions>
					{options.map((option) => (
						<h3 className="sidebar__option">{option}</h3> //toDo: fix the option bug to select unic option per click
					))}
				</SidebarMenuOptions>
			)}
		</SidebarOption>
	);
};

const SidebarOption = styled.div`
	margin: 28px auto;
	width: 221px;
`;

const SidebarOptionContent = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	cursor: pointer;
`;

const SidebarOptionContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	> h1 {
		font-size: 16px;
		line-height: 24px;
		font-weight: 400;
		margin: 0 16px;
		color: #696d8c;
		font-family: "Gelion Regular", sans-serif;
	}

	> .sidebar__title {
		color: #6837ef;
	}

	> .sidebar__icon {
		color: #6837ef;
	}
`;

const SidebarMenuOptions = styled.div`
	display: block;

	> h3 {
		font-size: 16px;
		font-weight: 400;
		line-height: 24px;
		font-family: "Gelion Regular", sans-serif;
		margin-left: 32px;
		color: #696d8c;
	}
`;

const StyledArrowRight = styled(MdKeyboardArrowRight)`
	color: #e5e4ef;
`;

const StyledArrowDown = styled(MdKeyboardArrowDown)`
	color: #e5e4ef;
`;

const SidebarOptionName = styled.div``;

export default SidebarOptions;
