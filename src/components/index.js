import { React } from 'react';
import Bar from './Bar';
import PassedCount from './PassedCount';
import SubjectName from './SubjectName';

const HorizontalBarChart = (context) =>
	<div className="row">
		<SubjectName { ...context }/>
		<Bar { ...context }/>
		<PassedCount { ...context }/>
	</div>;

export default HorizontalBarChart;
