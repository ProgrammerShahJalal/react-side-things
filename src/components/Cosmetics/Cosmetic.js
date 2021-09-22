import React from 'react';

const Cosmetic = (props) => {
    const { name, price } = props.product;
    return (
        <div>
            <h3>Name: {name}</h3>
            <h4>Price: {price}</h4>
        </div>
    );
};

export default Cosmetic;