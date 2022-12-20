import { React } from 'react';
import Row from './Row';
import Scale from './Scale';

const HorizontalBarChart = (context) => {
	const { config: { subjects, maxLabelWidth }} = context;

	return (
		<table className="chart">
			<tbody>
				{subjects.map((subject, index) =>
					Row({ ...context, data: { subject, index }}))}
				<tr className="row">
					<td width={ `${ maxLabelWidth }%` }/>
					<td>
						<Scale { ...context }/>
					</td></tr>
			</tbody>

		</table>
	);
};

export default HorizontalBarChart;
