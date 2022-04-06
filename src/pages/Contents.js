// Components
import Graph from "../components/contents/Graph";
import Header from "../components/contents/Header";
import HeaderNavbar from "../components/contents/HeaderNavbar";
import HeaderInformation from "../components/contents/HeaderInformation";
// Styles
import { ContentsContainer } from "../styles/Content";

const Contents = () => {
	return (
		<ContentsContainer>
			<Header />
			<HeaderNavbar />
			<HeaderInformation />
			<Graph />
		</ContentsContainer>
	);
};

export default Contents;
