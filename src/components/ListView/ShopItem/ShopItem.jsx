import React from 'react';
import './ShopItem.css';

export default function ShopItem({item, key}) {

    return (
        <div className='shopItem'>
            <div className='wrap_img'>
                <img src={item.img} alt='' />
            </div>
            <h2 className='heading'>{item.name}</h2>
            <p>{item.color}</p>
            <span className='bodyCart_price'>${item.price}</span>
            <button className='buttonCart'>Add to Cart</button>
        </div>
    );
}