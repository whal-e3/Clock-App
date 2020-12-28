import React from 'react';
import { Label, Form, Container, Divider, Icon } from 'semantic-ui-react';
import './style.css';

const Timer = () => {
	return (
		<div className='timer'>
			<h1 className='nameBox'>Timer</h1>
			<Container textAlign='center'>
				<Form style={{ display: 'flex' }}>
					<Label>
						<input value={null} type='number' placeholder='hour'></input>
					</Label>
					<Label>
						<input value={null} type='number' placeholder='minute'></input>
					</Label>
					<Label>
						<input value={null} type='number' placeholder='second'></input>
					</Label>
				</Form>
				<br></br>
				<h1>01 : 29 : 43</h1>
				<br></br>
				<Divider />
				<br></br>
				<br></br>
				<div style={{ display: 'flex', justifyContent: 'space-around' }}>
					<Icon link name='stop circle outline' size='huge'></Icon>
					<Icon link name='play circle outline' size='huge'></Icon>
				</div>
			</Container>
		</div>
	);
};

export default Timer;

// <Icon name='pause circle outline'></Icon>;
