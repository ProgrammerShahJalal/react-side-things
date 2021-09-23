import React from 'react';
import { addDb } from '../Utilities/fakedb';

const Cosmetic = (props) => {
    const { name, price, id } = props.product;
    const handleBuyNow = id => {
        // set to local storage
        console.log(id);
        addDb(id);
    }
    return (
        <div>
            <h3>Name: {name}</h3>
            <h4>Price: {price}</h4>
            <button onClick={() => handleBuyNow(id)}>Buy Now</button>
        </div>
    );
};

export default Cosmetic;