import { React } from 'react';
import ChartManager from '../services/chartManager';

const Bar = (context) => {
	const { barStyle } = ChartManager.getStyle(context);

	return (
		<div
			className="bar"
			style={ barStyle }
		/>
	);
};

export default Bar;
