import React, { useState } from 'react';

export default function Card({ id, image, info, price, name, removeTour }) {
    const [readmore, setReadmore] = useState(true);
    const description =  readmore?`${info.substring(0, 200)}....`:info;

    function readmoreHandler() {
        setReadmore(!readmore);
    }

    return (
        <div className="card">
            <img src={image} className='image' alt={name} />
            <div className='tour-info'>
                <div className='tour-details'>
                    <h4 className='tour-price'>₹ {price}</h4>
                    <h4 className='tour-name'>{name}</h4>
                </div>
                <div className='description'>
                    {description}
                    {info.length > 200 && (
                        <span className='read-more' onClick={readmoreHandler}>
                            {readmore ? 'Read More' : 'Show Less'}
                        </span>
                    )}
                </div>
            </div>
            <button className='btn-red' onClick={() => removeTour(id)}>
                Not Interested
            </button>
        </div>
    );
}
