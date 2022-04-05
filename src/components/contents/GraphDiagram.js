import styled from "styled-components";
// Component
import { Line } from "react-chartjs-2";
import { AVERAGE_RESPONSE_TIME_DATA, OPTIONS } from "../../data/data";

const GraphDiagram = () => {
	return (
		<GraphDiagramContaier>
			<Chart>
				<Line options={OPTIONS} data={AVERAGE_RESPONSE_TIME_DATA} />
			</Chart>
		</GraphDiagramContaier>
	);
};

const GraphDiagramContaier = styled.div`
	padding-bottom: 12px;
`;

const Chart = styled.div`
	height: 220px;
`;

export default GraphDiagram;
