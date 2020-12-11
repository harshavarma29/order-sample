import logo from './logo.svg';
import './App.css';
import {PureComponent} from 'react';
import Selector from './components/Selector';
import MakeOrder from './components/MakeOrder';
import OrderBook from './components/OrderBook';
import Chart from './components/Chart';

class App extends PureComponent {
  constructor() {
    super();

    this.state = {
      type: ''
    }
  }

  selectType = (name) => {
    this.setState({
      type: name
    })
  }

  render() {
    return (
      <div className="App">
        <span className='title'>Order Book</span>
        <div className='block-size'>
          <Selector selType={this.selectType} value={this.state.type}/>
          {
            (this.state.type === 'order book')?
              <OrderBook/>
              :
              <MakeOrder open={this.selectType}/>
          }
        </div>
        <Chart execute={this.state.type}/>
      </div>
    );
  }
}

export default App;
