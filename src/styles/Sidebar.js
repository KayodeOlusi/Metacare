import styled from "styled-components";

// All Components
export const SidebarContainer = styled.div`
	flex: 0.3;
	max-width: 262px;
	height: 100vh;
	border-right: 1px solid #ecebf5;
	overflow-y: scroll;
	::-webkit-scrollbar {
		display: none;
	}
`;

// UserInfo
export const UserContainer = styled.div`
	margin: 21px auto;
	width: 221px;
	border-radius: 8px;
	border: 1px solid #ecebf5;
`;

export const UserInformation = styled.div`
	> h1 {
		font-size: 14px;
		font-weight: 400;
		line-height: 22px;
		color: #060213;
		padding: 12px 47px 1px 57px;
		font-family: "Gelion Bold", sans-serif;
	}

	> p {
		font-size: 12px;
		line-height: 20px;
		font-weight: 400;
		color: #696d8c;
		padding: 1px 35px 11px 57px;
		font-family: "Gelion Regular", sans-serif;
	}
`;
