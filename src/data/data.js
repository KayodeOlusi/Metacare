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

const labels = ["Jan", "Feb", "March", "Apr", "May", "Jun", "Jul", "Aug"];

export const AVERAGE_RESPONSE_TIME_DATA = {
	labels,
	datasets: [
		{
			data: [18, 48, 19, 42, 34],
			borderWidth: 2,
			borderColor: "#F05D23",
			backgroundColor: "rgba(255, 99, 132, 0.5)",
		},
	],
};

export const OPTIONS = {
	responsive: true,
	plugins: {
		legend: {
			display: false,
			position: "top",
		},
		title: {
			display: false,
			text: "Line Chart",
		},
	},
};
