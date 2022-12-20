
const ChartManager = {
	getMaxLabelLength: (subjects) =>
		subjects.reduce((acc, { subjectName }) =>
			(acc < subjectName.length
				? subjectName.length
				: acc)
		, 0),

	getStyle: (context) => {
		const { config, data } = context;
		const { maxBarColumnWidth, maximumInput } = config;
		const { subject: { passedCount }} = data;
		// eslint-disable-next-line max-len
		const width = (passedCount * maxBarColumnWidth) / maximumInput;

		return (
			{
				barStyle: {
					width: `${ width }%`,
				},
			}
		);
	},
};

export default ChartManager;
