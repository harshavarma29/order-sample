import React from 'react';
import '../styles/orderbook.css';
import {buy, sell} from '../components/data';

const Order = () => {

    buy.forEach((buyRow) => {
        sell.forEach((sellRow) => {

            if(buyRow.order === 'Limit' && buyRow.price > sellRow.price && buyRow.name === sellRow.name || buyRow.order === 'Stop' && buyRow.price < sellRow.price && buyRow.name === sellRow.name && buyRow.order === 'Market' && buyRow.price === sellRow.price) {
                buyRow.status = 'bought';
                buyRow.color = 'green';

                sellRow.status = 'Sold';
                sellRow.color = 'blue';
                return
            }

        })
    })

    return <React.Fragment>
        <div style={{marginTop: '20px'}}>
            <div className='table-title'>
                <span className='underline'>ASK(SELL) Table</span>
            </div>
            <table>
                <tr>
                    <th>NAME</th>
                    <th>PRICE</th>
                    <th>QUANTITY</th>
                    <th>Order</th>
                    <th>STATUS</th>
                </tr>
                {
                    sell.map((row, id) => {
                        return <tr key={id}>
                            <td>{row.name}</td>
                            <td>{row.price}</td>
                            <td>{row.quantity}</td>
                            <td>{row.order}</td>
                            <td style={{color: row.color}}>{row.status}</td>
                        </tr>
                    })
                }
            </table>
            <div className='table-title'>
                <span className='underline'>BID(BUY) Table</span>
            </div>
            <table>
                <tr>
                    <th>NAME</th>
                    <th>PRICE</th>
                    <th>QUANTITY</th>
                    <th>Order</th>
                    <th>STATUS</th>
                </tr>
                {
                    buy.map((row, id) => {
                        return <tr key={id}>
                            <td>{row.name}</td>
                            <td>{row.price}</td>
                            <td>{row.quantity}</td>
                            <td>{row.order}</td>
                            <td style={{color: row.color}}>{row.status}</td>
                        </tr>
                    })
                }
            </table>
        </div>
    </React.Fragment>
}

export default React.memo(Order);