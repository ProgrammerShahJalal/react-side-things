import React, { useEffect, useState } from 'react';
import Cosmetic from './Cosmetic';
// import { add, multiply } from '../Utilities/Storage';

const Cosmetics = () => {
    // const first = 45;
    // const second = 87;
    // const sum = add(first, second);
    // const multi = multiply(first, second);

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('./cosmetics.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <h1>Shop my cosmetics!</h1>
            {
                products.map(product => <Cosmetic
                    key={product.id}
                    product={product}
                    name={product.name}
                    price={product.price}
                ></Cosmetic>)
            }
            {/* {
                console.log(sum, multi)
            } */}
        </div>
    );
};

export default Cosmetics;