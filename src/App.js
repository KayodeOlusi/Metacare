import styled from "styled-components";
import Sidebar from "./pages/Sidebar";

const App = () => {
	return (
		<AppBody>
			<Sidebar />
		</AppBody>
	);
};

const AppBody = styled.div`
	display: flex;
	height: 100vh;
`;

export default App;
