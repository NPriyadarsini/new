import HorizontalBarChart from './index.js';
import { React } from 'react';
import Scale from './Scale.js';

const BarChart = (context) => {
	const { config: { subjects }} = context;

	return (
		<div className="chart">
			{subjects.map((subject, index) =>
				HorizontalBarChart({ ...context, data: { subject, index }}))}
			<Scale/>
		</div>
	);
};

export default BarChart;
