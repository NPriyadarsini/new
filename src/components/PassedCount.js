import { React } from 'react';
import ChartManager from '../services/chartManager';

const PassedCount = (context) => {
	const { data: { subject }, config: { divider }} = context;
	const { passedCount } = subject;
	const { labelStyle } = ChartManager.getStyle(context);

	return (
		<div
			className="passedCount"
			style={ {
				...labelStyle,
				left: `${ passedCount * divider }%`,
			} }
		>
			{`${ passedCount }`}
		</div>

	);
};

export default PassedCount;
