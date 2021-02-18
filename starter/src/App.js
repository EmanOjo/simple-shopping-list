import React, { useState, useEffect } from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faCircle, faCheckCircle, faPlus } from '@fortawesome/free-solid-svg-icons';

const App = () => {

	const [items, setItems] = useState([]);

	const [inputValue, setInputValue] = useState('');
	const [inputAmount, setInputAmount] = useState(0);

	const handleAddButtonClick = () => {
		const newItem = {
			itemName: inputValue,
			quantity: inputAmount,
		};

		const newItems = [...items, newItem];

		setItems(newItems);
		setInputValue('');
		setInputAmount('');
	};


	const increaseQuantity = (index) => {

		const newItems = [...items];
		newItems[index].quantity++;
		setItems(newItems);
	}

	const decreaseQuantity = (index) => {
		const newItems = [...items];
		newItems[index].quantity--;

		setItems(newItems)
	}
	
	const removeItem = (index) => {
		const newItems = [...items];
		const itemDeleted = newItems.splice(index,1)

		setItems(newItems)
	}


	return (
		<div className='main-container'>
			<div className='add-item-box'>
				<input value={inputValue} onChange={(event) => setInputValue(event.target.value)} className='add-item-input' placeholder='Add an item...' />
			</div>
			<div className='add-item-box'>
				<input value={inputAmount} onChange={(event) => setInputAmount(event.target.value)} className='add-item-input' placeholder='Add an amount' />
			</div>
			<div className='add-item-box'>
				<button onClick={() => handleAddButtonClick()} >+</button>
			</div>
			<div className='item-list'>
				{items.map((item, index) =>
					<div className='item-container'>
						<div className='item-name'>
							<span>{item.itemName}</span>
						</div>
						<div className='quantity'>
							<button onClick={() => decreaseQuantity(index)}> {'<'} </button>
							<span> {item.quantity} </span>
							<button onClick={() => increaseQuantity(index)}> {'>'} </button>
						</div>
						<div>
						<button style={{color: 'black'}} onClick={() => removeItem(index)}>X</button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default App;
