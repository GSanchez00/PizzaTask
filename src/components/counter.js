import React, {useState} from 'react';
import styled from 'styled-components/macro';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { Button, InputGroup, FormControl } from 'react-bootstrap';


const DIV = styled.div`width: 152px; margin-right:10px`;

const Counter = (props) =>
{
	const max=100, min=1;
	const [count, setCount] = useState(props.quantity);
	const _onChange = (e) => {
		let new_value = e.target.value;
		if( new_value === '' || isNaN(new_value)) 
		{	setCount(min) 
			return;
		}
		else
		{
			new_value=parseInt(new_value);
			if (new_value > max) 
				setCount(count) 
			if(new_value < min)
				setCount(count) 
			if(new_value >= min && new_value <=max)
			{
				setCount(new_value) 
				props.onChange(new_value);
			}
		}
	}

	const _increase = (value) => {
		if( value === '' || value >= max ) {
			setCount(max) // fallback to min value
		} else {
			setCount(count + 1);
		}
		props.onPlusClick(count + 1);
	}

	const _decrease = (value) => {
		if( value === '' || value <= min) {
			setCount(min) 
		} else {
			setCount(count - 1);
		}
		props.onMinusClick(count - 1);
	}

	return (
		<DIV>
			<InputGroup className="mb-3">
				<Button disabled={props.readOnly} variant="outline-secondary" onClick={() => {_decrease(count)}}>
					<FontAwesomeIcon icon={faMinus} />
				</Button>
				<FormControl
					placeholder=""
					aria-label=""
					onChange={_onChange}
					value={count}
					disabled={props.readOnly}
				/>
				<Button disabled={props.readOnly} variant="outline-secondary" onClick={() => {_increase(count)}}>
					<FontAwesomeIcon icon={faPlus} />
				</Button>
			</InputGroup>
		</DIV>
	)
}

export default Counter