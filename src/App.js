import { React } from 'react';
import './App.scss';
import HorizontalBarChart from './components/index';

const App = (context) =>
	<div className="App">
		<HorizontalBarChart { ...context }/>
	</div>;

export default App;
