import styled from "styled-components";
import GraphComponent from "./GraphComponent";

const Graph = () => {
	return (
		<GraphContainer>
			<GraphComponent />
		</GraphContainer>
	);
};

const GraphContainer = styled.div`
	max-width: 1024px;
	margin: 0 auto;
	border: 1px solid #ecebf5;
	border-radius: 8px;
`;

export default Graph;
