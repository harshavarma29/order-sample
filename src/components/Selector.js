import React from 'react';
import select from '../styles/selector.module.css';

const Selector = ({selType, value}) => {

    var make = document.getElementById('make');
    var book = document.getElementById('book');

    if(value === 'order book') {
        if(make) make.style.backgroundColor = 'rgb(206, 203, 203)';
        if(book) book.style.backgroundColor = 'white';
    }

    const open = (values, enable, disable) => {
        
        selType(values)

        if(make) make.style.backgroundColor = enable;
        if(book) book.style.backgroundColor = disable;
    }

    return <React.Fragment>
        <div className={select.block}>
            <div className={select.left} onClick={() => open('make order', 'white', 'rgb(206, 203, 203)')} id='make'>
                Make Order
            </div>
            <div className={select.right} onClick={() => open('order book', 'rgb(206, 203, 203)', 'white')} id='book'>
                Order Book
            </div>
        </div>
    </React.Fragment>
}

export default React.memo(Selector);