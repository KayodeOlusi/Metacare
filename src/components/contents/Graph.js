import styled from "styled-components";
import GraphComponent from "./GraphComponent";

const Graph = () => {
	return (
		<GraphContainer>
			<GraphComponent />
			<GraphComponent />
			<GraphComponent />
			<GraphComponent />
		</GraphContainer>
	);
};

const GraphContainer = styled.div`
	max-width: 1024px;
	margin: 0 auto;
`;

export default Graph;
