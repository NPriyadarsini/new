const ChartManager = {
	getStyle: (context) => {
		const { data: { subject, index },
			config: { multiplier, divider }} = context;
		const { passedCount } = subject;

		return (
			{
				barStyle: {
					'height': '10%',
					'width': `${ passedCount * divider }%`,
					'margin-top': `${ index * multiplier }%`,
				},
				labelStyle: {
					'height': '10%',
					'margin-top': `${ (index * multiplier) + 1 }%`,
				},
			}
		);
	},
};

export default ChartManager;
