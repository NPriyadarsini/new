import { rndBetween } from '@laufire/utils/lib';
const ten = 10;
const hundred = 100;

const config = {
	subjects: [
		{
			subjectName: 'Science',
			passedCount: rndBetween(ten, hundred),
		},
		{
			subjectName: 'English',
			passedCount: rndBetween(ten, hundred),
		},
		{
			subjectName: 'History',
			passedCount: rndBetween(ten, hundred),
		},
		{
			subjectName: 'Maths',
			passedCount: rndBetween(ten, hundred),
		},
		{
			subjectName: 'Music',
			passedCount: 100,
		},
	],
	multiplier: 3,
	divider: 0.8,
};

export default config;
