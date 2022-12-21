
const ChartManager = {
	getMaxLabelLength: (subjects) =>
		subjects.reduce((acc, { subjectName }) =>
			(acc < subjectName.length
				? subjectName.length
				: acc)
		, 0),

	getDimension: (context) => {
		const { config, data } = context;
		const { maxBarColumnWidth, maximumInput } = config;
		const { subject: { passedCount }} = data;
		const width = (passedCount * maxBarColumnWidth) / maximumInput;

		return width;
	},

};

export default ChartManager;
