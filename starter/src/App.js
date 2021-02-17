import React, { useState, useEffect } from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faCircle, faCheckCircle, faPlus } from '@fortawesome/free-solid-svg-icons';

const App = () => {

	const [items, setItems] = useState([]);

	const [inputValue, setInputValue] = useState('');

	const handleAddButtonClick = () => {
		const newItem = {
			itemName: inputValue,
			quantity: 1,
		};

		const newItems = [...items, newItem];

		setItems(newItems);
		setInputValue('');
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



	return (
		<div className='main-container'>
			<div className='add-item-box'>
				<input value={inputValue} onChange={(event) => setInputValue(event.target.value)} className='add-item-input' placeholder='Add an item...' />
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
					</div>
				)}
			</div>
		</div>

	);
};

export default App;
