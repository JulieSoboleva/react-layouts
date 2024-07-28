import React, { useState } from 'react';
import './Store.css';
import IconSwitch from '../IconSwitch/IconSwitch';
import CardsView from '../CardsView/CardsView';
import ListView from '../ListView/ListView';

export default function Store({products}) {
    const [icon, setIcon] = useState('view_list');

    function switcher() {
        switch(icon) {
            case 'view_list':
                return setIcon('view_module');
            case 'view_module':
                return setIcon('view_list');
        }
    }

    return (
        <div className='container'>
            <IconSwitch icon={icon} onSwitch={switcher}/>
            <main className='main'>
                {icon === 'view_list' ? <CardsView cards={products}/> : <ListView items={products}/> }
            </main>
        </div>
    );
}