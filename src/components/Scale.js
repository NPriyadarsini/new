import { React } from 'react';

const Scale = () =>
	<div
		className="scale"
	>
		<span className="line"/>
		<span className="marking">
			0
		</span>
		<span
			className="marking"
			style={ {
				left: '100%',

			} }
		>
			100
		</span>
	</div>;

export default Scale;
