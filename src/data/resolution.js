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

export const RESOLUTION_COLOR = "#FB6491";

export const AVERAGE_RESOLUTION_TIME = {
	labels,
	datasets: [
		{
			data: [48, 22, 16, 20, 30, 42, 26, 38],
			borderWidth: 2,
			borderColor: "#FB6491",
			backgroundColor: "#ffffff",
		},
	],
};

export const RESOLUTION_OPTIONS = {
	responsive: true,
	maintainAspectRatio: false,
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
	scales: {
		y: {
			beginAtZero: false,
			position: "left",
			grid: {
				drawBorder: false,
			},
			ticks: {
				color: "#696D8C",
				padding: 10,
				precision: 0,
				stepSize: 10,
				font: { size: 14, family: "'Gelion', sans-serif" },
			},
		},
		x: {
			grid: {
				display: false,
				drawBorder: false,
			},
			ticks: {
				color: "#696D8C",
				padding: 8,
				font: {
					family: "'Gelion', sans-serif",
				},
			},
		},
	},
};
