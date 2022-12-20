import { React } from 'react';
import Bar from './Bar';
import SubjectName from './Label';

const Row = (context) => {
	const { data: { index }, config: { maxLabelWidth }} = context;

	return (
		<tr key={ index } className="row">
			<td
				width={ `${ maxLabelWidth }%` }
			>
				<SubjectName { ...context }/>
			</td>
			<td>
				<Bar { ...context }/>
			</td>
		</tr>
	);
};

export default Row;
