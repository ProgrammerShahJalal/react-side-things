import React from 'react';
import { add, multiply } from '../Utilities/Storage';

const Cosmetics = () => {
    const first = 45;
    const second = 87;
    const sum = add(first, second);
    const multi = multiply(first, second);
    return (
        <div>
            {
                console.log(sum, multi)
            }
        </div>
    );
};

export default Cosmetics;