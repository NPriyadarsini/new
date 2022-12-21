import { rndBetween } from '@laufire/utils/lib';
import ChartManager from '../services/ChartManager';
const minimumInput = 1;
const maximumInput = 1000;
const hundred = 100;
const divider = maximumInput / hundred;
const multiplier = 8;
const subjects = [
	{
		subjectName: 'Science',
		passedCount: rndBetween(minimumInput, maximumInput),
	},
	{
		subjectName: 'English',
		passedCount: rndBetween(minimumInput, maximumInput),
	},
	{
		subjectName: 'History',
		passedCount: rndBetween(minimumInput, maximumInput),
	},
	{
		subjectName: 'Maths',
		passedCount: rndBetween(minimumInput, maximumInput),
	},
	{
		subjectName: 'Music',
		passedCount: 1000,
	},
];
const maxLabelWidth = ChartManager.getMaxLabelLength(subjects);
const maxBarColumnWidth = maximumInput / divider;

const config = {
	subjects,
	multiplier,
	maxLabelWidth,
	maxBarColumnWidth,
	maximumInput,
};

export default config;
