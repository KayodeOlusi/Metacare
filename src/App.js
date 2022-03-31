import styled from "styled-components";
// Components
import Sidebar from "./pages/Sidebar";
import Contents from "./pages/Contents";

const App = () => {
	return (
		<AppBody>
			<Sidebar />
			<Contents />
		</AppBody>
	);
};

const AppBody = styled.div`
	display: flex;
	height: 100vh;
	font-family: "Gelion", sans-serif;
`;

export default App;
