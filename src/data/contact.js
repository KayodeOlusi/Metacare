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

export const CONTACT_COLOR = "#07C9E2";

export const FIRST_CONTACT_RESOLUTION_RATE = {
	labels,
	datasets: [
		{
			data: [10, 40, 12, 22, 34, 38, 26, 50],
			borderWidth: 2,
			borderColor: "#07C9E2",
			backgroundColor: "#ffffff",
		},
	],
};

export const CONTACT_OPTIONS = {
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
