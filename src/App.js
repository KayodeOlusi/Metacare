import { Line } from "react-chartjs-2";
import "./App.css";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

const state = {
	labels: ["January", "February", "March", "April", "May"],
	datasets: [
		{
			label: "Rainfall",
			fill: false,
			lineTension: 0,
			backgroundColor: "rgba(75,192,192,1)",
			borderColor: "rgba(0,0,0,1)",
			borderWidth: 2,
			data: [65, 59, 80, 81, 56],
		},
	],
};

const options = {
	responsive: true,
	plugins: {
		legend: {
			position: "top",
		},
		title: {
			display: true,
			text: "Chart.js Line Chart",
		},
	},
};

function App() {
	return (
		<div className="App">
			<Line options={options} datasetIdKey="id" data={state} />
		</div>
	);
}

export default App;
