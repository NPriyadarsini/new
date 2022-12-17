import { React } from 'react';
import ChartManager from '../services/chartManager';

const SubjectName = (context) => {
	const { data: { subject }} = context;
	const { subjectName } = subject;
	const { labelStyle } = ChartManager.getStyle(context);

	return (
		<div
			className="subjectName"
			style={ labelStyle }
		>
			{subjectName}
		</div>
	);
};

export default SubjectName;
