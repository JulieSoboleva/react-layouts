import React from 'react';
import './ListView.css';
import ShopItem from './ShopItem/ShopItem';

export default function ListView({items}) {
    let index = 0;

    return (
        <div className='listView'>
            {items.map(item => (
                <ShopItem item={item} key={index++}/>
            ))}
        </div>
    );
}