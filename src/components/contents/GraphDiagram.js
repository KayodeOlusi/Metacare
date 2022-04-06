// Component
import { Line } from "react-chartjs-2";
// Styles
import { Chart, GraphDiagramContaier } from "../../styles/Content";

const GraphDiagram = ({ options, data }) => {
	return (
		<GraphDiagramContaier>
			<Chart>
				<Line options={options} data={data} />
			</Chart>
		</GraphDiagramContaier>
	);
};

export default GraphDiagram;
