import React from 'react';
import './CardsView.css';
import ShopCard from './ShopCard/ShopCard';

export default function CardsView({cards}) {
    let index = 0;

    return (
        <div className='cardsView'>
            {cards.map(card => (
                <ShopCard card={card} key={index++}/>
            ))}
        </div>
    );
} 