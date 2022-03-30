import styled from "styled-components";
// Icons
import { CgBox } from "react-icons/cg";
import { CgCheckR } from "react-icons/cg";
import { HiOutlineChat } from "react-icons/hi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { AiOutlineUsergroupDelete } from "react-icons/ai";
// Components
import UserInfo from "../components/sidebar/UserInfo";
import SidebarOptions from "../components/sidebar/SidebarOptions";

const Sidebar = () => {
	return (
		<SidebarContainer>
			<UserInfo />
			<SidebarOptions Icon={AiOutlineUsergroupDelete} title="Admin" />
			<SidebarOptions Icon={CgCheckR} title="Knowledge Base" />
			<SidebarOptions Icon={CgCheckR} title="Train SAM" />
			<SidebarOptions Icon={CgBox} title="Agent Inbox" />
			<SidebarOptions Icon={AiOutlineClockCircle} title="Help Center" />
			<SidebarOptions Icon={HiOutlineChat} title="Analytics" />
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
