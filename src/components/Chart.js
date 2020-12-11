import React from 'react';
import '../styles/chart.css';
import {buy, sell} from '../components/data';

const Chart = () => {
    const Buy = [];
    const Sell = [];

    buy.forEach(data => {
        Buy.push(data.price);
    })

    sell.forEach(data => {
        Sell.push(data.price)
    })
    
    const max = Buy.concat(Sell).reduce((a, b) => {
        return Math.max(a, b);
    })

    const generateXaxis = [];

    for(var i=0;i<=max+10;i+=50) generateXaxis.push(i);

    return <React.Fragment>
        <span className='title'>Chart</span>
        <div className='block-size'>

            <div className='buyer'>
                <span className='b-title'>Buy Chart</span>
                {
                    Buy.map((barValue, key) => {
                        return <div className='bar' key={key}>
                            <div className='buy-progress' id='buy' style={{width: barValue+'px'}}>
                                <span style={{float: 'right', color: 'black'}}>{key+1}</span>
                                <span style={{fontSize: '20px'}}>{barValue}</span>
                            </div>
                        </div>
                    })
                }
                <div>
                    {
                        generateXaxis.map(item => {
                            return <div>
                                <div className='item' style={{float: 'right'}}>
                                    <span style={{float: 'right'}}>{item}</span>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
            <div className='seller'>
                <span className='s-title'>Sell Chart</span>
                {
                    Sell.map((barValue, key) => {
                        return <div className='bar' key={key}>
                            <div className='sell-progress' id='sell' style={{width: barValue+'px'}}>
                                <span style={{float: 'left', color: 'black'}}>{key+1}</span>
                                <span style={{fontSize: '20px'}}>{barValue}</span>
                            </div>
                        </div>
                    })
                }
                <div>
                    {
                        generateXaxis.map(item => {
                            return <div style={{width: (max+50)+"px"}}>
                                <div className='item' style={{float: 'left'}}>
                                    <span style={{float: 'left'}}>{item}</span>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    </React.Fragment>
}

export default React.memo(Chart);