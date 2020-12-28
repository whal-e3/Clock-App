// widget - world time, alarm, stopwatch, timer
import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import WorldTime from './components/WorldTime';
import Timer from './components/Timer';

class App extends React.Component {
	render() {
		return (
			<div style={{ padding: '0.2rem' }}>
				<Timer />
			</div>
		);
	}
}

export default App;
