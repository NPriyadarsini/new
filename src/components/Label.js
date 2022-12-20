import { React } from 'react';

const SubjectName = (context) => {
	const { data: { subject }} = context;
	const { subjectName } = subject;

	return (
		<div
			className="label"
		>
			{subjectName}
		</div>
	);
};

export default SubjectName;
