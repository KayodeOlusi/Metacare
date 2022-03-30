import styled from "styled-components";
import { MdKeyboardArrowRight } from "react-icons/md";

const SidebarOptions = ({ Icon, title }) => {
	return (
		<SidebarOption>
			{Icon && <Icon />}
			{Icon ? <h1>{title}</h1> : <SidebarOptionName>{title}</SidebarOptionName>}
			<StyledArrow />
		</SidebarOption>
	);
};

const SidebarOption = styled.div`
	margin: 28px auto;
	width: 221px;
	display: flex;
	align-items: center;
	cursor: pointer;

	> h1 {
		font-size: 16px;
		line-height: 24px;
		font-weight: 400;
		margin: 0 16px;
		color: #696d8c;
		font-family: "Gelion Regular", sans-serif;
	}
`;

const StyledArrow = styled(MdKeyboardArrowRight)`
	position: absolute;
	left: 13.5%;
	color: #e5e4ef;
`;

const SidebarOptionName = styled.div``;

export default SidebarOptions;
