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
			data: [18, 48, 18, 42, 34, 42, 26, 34],
			borderWidth: 2,
			borderColor: "#F05D23",
			backgroundColor: "rgba(255, 99, 132, 0.5)",
		},
	],
};

export const OPTIONS = {
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
