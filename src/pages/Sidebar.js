import styled from "styled-components";
import UserInfo from "../components/sidebar/UserInfo";

const Sidebar = () => {
	return (
		<SidebarContainer>
			<UserInfo />
		</SidebarContainer>
	);
};

const SidebarContainer = styled.div`
	flex: 0.3;
	max-width: 262px;
	height: 100vh;
	border-right: 1px solid #ecebf5;
`;

export default Sidebar;
