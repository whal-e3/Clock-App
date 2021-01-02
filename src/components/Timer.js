import React, { useState } from 'react';
import { Label, Form, Container, Divider, Icon } from 'semantic-ui-react';
import './style.css';

const Timer = () => {
	const [hour, setHour] = useState(0);
	const [minute, setMinute] = useState(0);
	const [second, setSecond] = useState(0);

	let hourDisplay = parseInt(hour);
	if (hourDisplay < 10) {
		hourDisplay = '0' + hourDisplay;
	}
	let minuteDisplay = parseInt(minute);
	if (minuteDisplay < 10) {
		minuteDisplay = '0' + minuteDisplay;
	}
	let secondDisplay = parseInt(second);
	if (secondDisplay < 10) {
		secondDisplay = '0' + secondDisplay;
	}
	let interval;
	const play = () => {
		if (hour > 0 || minute > 0 || second > 0) {
			let distance = hour * 60 * 60 * 1000 + minute * 60 * 1000 + second * 1000;
			interval = setInterval(() => {
				distance -= 1000;
				setHour(Math.floor(distance / (60 * 60 * 1000)));
				setMinute(new Date(distance).getMinutes());
				setSecond(new Date(distance).getSeconds());
				if (distance === 0) {
					clearInterval(interval);
				}
			}, 1000);
		} else {
			alert('set time first');
		}
	};
	// const pause = () => {
	// 	clearInterval();
	// };
	const stop = () => {
		setHour(0);
		setMinute(0);
		setSecond(0);
	};

	return (
		<div className='timer'>
			<h1 className='nameBox'>Timer</h1>
			<Container textAlign='center'>
				<Form style={{ display: 'flex' }}>
					<Label>
						<input
							onChange={e => {
								if (e.target.value >= 0 && e.target.value <= 12) {
									setHour(e.target.value);
								} else {
									alert('input possible number');
									setHour(0);
								}
							}}
							value={hour}
							type='number'
							placeholder='hour'></input>
					</Label>
					<Label>
						<input
							onChange={e => {
								if (e.target.value >= 0 && e.target.value < 60) {
									setMinute(e.target.value);
								} else {
									alert('input possible number');
									setMinute(0);
								}
							}}
							value={minute}
							type='number'
							placeholder='minute'></input>
					</Label>
					<Label>
						<input
							onChange={e => {
								if (e.target.value >= 0 && e.target.value < 60) {
									setSecond(e.target.value);
								} else {
									alert('input possible number');
									setSecond(0);
								}
							}}
							value={second}
							type='number'
							placeholder='second'></input>
					</Label>
				</Form>
				<br></br>
				<h1>
					{hourDisplay} : {minuteDisplay} : {secondDisplay}
				</h1>
				<br></br>
				<Divider />
				<br></br>
				<br></br>
				<div style={{ display: 'flex', justifyContent: 'space-around' }}>
					<Icon
						link
						name='stop circle outline'
						size='huge'
						onClick={stop}></Icon>
					<Icon
						link
						name='play circle outline'
						size='huge'
						onClick={play}></Icon>
				</div>
			</Container>
		</div>
	);
};

export default Timer;

// <Icon link name='pause circle outline' size='huge' onClick={pause}></Icon>
