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
	const OPTIONS = ["Teams", "Knowledge Base", "Training SAM", "Help Center"];

	return (
		<SidebarContainer>
			<UserInfo />
			<SidebarOptions
				Icon={AiOutlineUsergroupDelete}
				title="Admin"
				options={OPTIONS}
			/>
			<SidebarOptions Icon={CgCheckR} title="Knowledge Base" options={OPTIONS} />
			<SidebarOptions Icon={CgCheckR} title="Train SAM" options={OPTIONS} />
			<SidebarOptions Icon={CgBox} title="Agent Inbox" options={OPTIONS} />
			<SidebarOptions
				Icon={AiOutlineClockCircle}
				title="Help Center"
				options={OPTIONS}
			/>
			<SidebarOptions Icon={HiOutlineChat} title="Analytics" options={OPTIONS} />
		</SidebarContainer>
	);
};

const SidebarContainer = styled.div`
	flex: 0.3;
	max-width: 262px;
	height: 100vh;
	border-right: 1px solid #ecebf5;
	overflow-y: scroll;
`;

export default Sidebar;
