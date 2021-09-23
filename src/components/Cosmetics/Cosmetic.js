import React from 'react';
import './Cosmetic.css'
import { addDb, removeFromDb } from '../Utilities/fakedb';

const Cosmetic = (props) => {
    const { name, price, id } = props.product;
    const handleBuyNow = id => {
        // set to local storage
        console.log(id);
        addDb(id);
    }
    const handleCancelOrder = id => {
        // set to local storage
        removeFromDb(id);
    }
    return (
        <div className='item'>
            <h3>Name: {name}</h3>
            <h4>Price: {price}</h4>
            <button id="buy-btn" onClick={() => handleBuyNow(id)}>Buy Now</button>
            <button id="cancel-order-btn" onClick={() => handleCancelOrder(id)}>Cancel</button>
        </div>
    );
};

export default Cosmetic;