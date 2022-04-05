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

export const REPLIES_COLOR = "#3E68FF";

export const REPLIES_PER_RESOLUTION = {
	labels,
	datasets: [
		{
			data: [22, 40, 48, 10, 16, 36, 26, 30],
			borderWidth: 2,
			borderColor: "#3E68FF",
			backgroundColor: "#ffffff",
		},
	],
};

export const REPLIES_OPTIONS = {
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
