import styled from "styled-components";
// Component
import { Line } from "react-chartjs-2";

const GraphDiagram = ({ options, data }) => {
	return (
		<GraphDiagramContaier>
			<Chart>
				<Line options={options} data={data} />
			</Chart>
		</GraphDiagramContaier>
	);
};

const GraphDiagramContaier = styled.div`
	padding-bottom: 12px;
`;

const Chart = styled.div`
	height: 220px;

	@media (min-width: 1024px) and (max-width: 1280px) {
		width: 600px;
	}
`;

export default GraphDiagram;
