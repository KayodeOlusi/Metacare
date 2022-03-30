import styled from "styled-components";
// Icons
import { MdKeyboardArrowRight } from "react-icons/md";

const SidebarOptions = ({ Icon, title }) => {
	return (
		<SidebarOption>
			<SidebarOptionContent>
				<SidebarOptionContainer>
					{Icon && <Icon />}
					{Icon ? <h1>{title}</h1> : <SidebarOptionName>{title}</SidebarOptionName>}
				</SidebarOptionContainer>
				<StyledArrow />
			</SidebarOptionContent>

			<SidebarMenuOptions>
				<h3>Teams</h3>
				<h3>Knowledge Base</h3>
				<h3>Training SAM</h3>
				<h3>Help Center</h3>
			</SidebarMenuOptions>
		</SidebarOption>
	);
};

const SidebarOption = styled.div`
	margin: 28px auto;
	width: 221px;
	cursor: pointer;
`;

const SidebarOptionContent = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
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
`;

const SidebarMenuOptions = styled.div`
	display: block;

	> h3 {
		font-size: 16px;
		font-weight: 400;
		line-height: 24px;
		font-family: "Gelion Regular", sans-serif;
		margin-left: 32px;
	}
`;

const StyledArrow = styled(MdKeyboardArrowRight)`
	position: static;
	left: 20.5%;
	color: #e5e4ef;
`;

const SidebarOptionName = styled.div``;

export default SidebarOptions;
