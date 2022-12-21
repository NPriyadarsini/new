import { React } from 'react';
import Row from './Row';

const HorizontalBarChart = (context) => {
	const { config: { subjects }} = context;

	return (
		<table className="chart">
			<tbody>
				{subjects.map((subject, index) =>
					Row({ ...context, data: { subject, index }}))}
			</tbody>

		</table>
	);
};

export default HorizontalBarChart;
