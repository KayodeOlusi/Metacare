import styled from "styled-components";
// Components
import Header from "../components/contents/Header";
import HeaderNavbar from "../components/contents/HeaderNavbar";
import HeaderInformation from "../components/contents/HeaderInformation";

const Contents = () => {
	return (
		<ContentsContainer>
			<Header />
			<HeaderNavbar />
			<HeaderInformation />
		</ContentsContainer>
	);
};

const ContentsContainer = styled.div`
	flex: 0.7;
	flex-grow: 1;
	max-width: 1178px;
`;

export default Contents;
