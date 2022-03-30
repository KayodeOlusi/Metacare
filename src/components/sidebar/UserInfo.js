import styled from "styled-components";

const UserInfo = () => {
	return (
		<UserContainer>
			<UserInformation>
				<h1>Metacare</h1>
				<p>adeyinka@metacare.app</p>
			</UserInformation>
		</UserContainer>
	);
};

const UserContainer = styled.div`
	margin: 21px auto;
	width: 221px;
	border-radius: 8px;
	border: 1px solid #ecebf5;
`;

const UserInformation = styled.div`
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

export default UserInfo;
