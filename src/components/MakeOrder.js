import React, {useState} from 'react';
import '../styles/makeorder.css';
import {priceValue, buy, sell} from '../components/data.js';
import { waitForDomChange } from '@testing-library/react';

const Make = ({open}) => {

    const [val, setVal] = useState({'quantity': '', 'price': ''});

    const [message, setMessage] = useState('');

    const setQuantity = (inpText) => {
        setVal({
            ...val,
            quantity: inpText
        })
    }

    const setPrice = (inpText) => {
        setVal({
            ...val,
            price: inpText
        })
    }

    const notValid = (name, type, order) => {
        if(name.value === 'Select Company' || type.value === 'Select Type' || order.value === 'Select Order' || val.price == '' || val.quantity == '' ) {return true}
    }

    const getId = (val) => {return document.getElementById(val)};

    var name = getId('name');
    var type = getId('type');
    var order = getId('order');

    const confirmation = (event) => {
        event.preventDefault()

        setMessage('');

        if(notValid(name, type, order)) {
            setMessage('alert')
            return
        }

        if(type.value === 'ASK(SELL)') {
            sell.push({'name': name.value, 'price': val.price, 'quantity': val.quantity, 'status' : 'hold', 'order': order.value});
        }
        else {
            buy.push({'name': name.value, 'price': val.price, 'quantity': val.quantity, 'status' : 'hold', 'order': order.value});
        }

        open('order book')
    }

    const selector = () => {
        order = getId('order');
        name = getId('name')
        if(order && name.value !='Select Company' && order.value === 'Market') {
            document.getElementById('price').value = priceValue[name.value];
            setVal({
                ...val,
                price: priceValue[name.value]
            })
        }
        else document.getElementById('price').value = '';
    }

    return <React.Fragment>
        <form>
            <div className='block'>
                {
                    (message==='alert')?
                        <p style={{color: 'red'}}>Fill all the feilds</p>
                    : ''
                }
                <div className='blocks block1'>
                    <select className='block1-val' id='name' required onClick={selector}>
                        <option>Select Company</option>
                        <option>BHEL</option>
                        <option>TATA STEEL</option> 
                        <option>UPI</option>
                        <option>GRM</option>
                        <option>FinCap</option>
                    </select>
                </div>
                <div className='blocks' required>
                    <select id='type'>
                        <option>Select Type</option>
                        <option>ASK(SELL)</option>
                        <option>BID(BUY)</option>
                    </select>
                    <select id='order' required onClick={selector}>
                        <option>Select Order</option>
                        <option>Market</option>
                        <option>Limit</option>
                        <option>Stop</option>
                    </select>
                </div>
                <div className='blocks'>
                    <input type='text' placeholder='Enter Quantity(Shares)' className='input' onChange={(event) => setQuantity(event.target.value)} required/>
                    <input type='text' placeholder='Enter Price' id='price' className='input' onChange={(event) => setPrice(event.target.value)} required/>
                </div>
                <button className='confirm' onClick={(event) => confirmation(event)}>Confirm</button>
            </div>
        </form>
    </React.Fragment>
}

export default React.memo(Make);