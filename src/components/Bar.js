import { React } from 'react';
import ChartManager from '../services/chartManager';

const Bar = (context) => {
	const { data: { subject }} = context;
	const { passedCount } = subject;
	const { barStyle } = ChartManager.getStyle(context);

	return (
		<div
			className="bar"
			style={ barStyle }
		>{passedCount}</div>
	);
};

export default Bar;
