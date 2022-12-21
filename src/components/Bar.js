import { React } from 'react';
import ChartManager from '../services/ChartManager';

const Bar = (context) => {
	const { data: { subject }} = context;
	const { passedCount } = subject;
	const width = ChartManager.getDimension(context);

	return (
		<div
			className="bar"
			style={ {
				width: `${ width }%`,
			} }
		>{passedCount}</div>
	);
};

export default Bar;
