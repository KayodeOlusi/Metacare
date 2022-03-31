import styled from "styled-components";
// Components
import Header from "../components/contents/Header";

const Contents = () => {
	return (
		<ContentsContainer>
			<Header />
		</ContentsContainer>
	);
};

const ContentsContainer = styled.div`
	flex: 0.7;
	flex-grow: 1;
	max-width: 1178px;
`;

export default Contents;
