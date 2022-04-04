import styled from "styled-components";
// Component
import { Line } from "react-chartjs-2";
import { AVERAGE_RESPONSE_TIME_DATA, OPTIONS } from "../../data/data";

const GraphDiagram = () => {
	return (
		<GraphDiagramContaier>
			<Line options={OPTIONS} data={AVERAGE_RESPONSE_TIME_DATA} />
		</GraphDiagramContaier>
	);
};

const GraphDiagramContaier = styled.div`
	padding-bottom: 12px;
`;

export default GraphDiagram;
