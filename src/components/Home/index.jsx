import { Component } from 'react';
import Balance from '../Balance';
import Transactions from '../Transactions';
import Form from '../Form';
import ErrorBoundary from '../ErrorBoundary';
import { Wrapper } from './styles';


let id = 0;

class Home extends Component {
  constructor() {
    super ();

    this.state = {
      balance: 0,
      transactions: []
    }

    this.onChange = this.onChange.bind(this)
    console.log('constructor');
  }

  onChange = (value) => {
    this.setState((state) => ({
      balance: state.balance + Number(value),
      transactions: [
        {
          value,
          label: 'change',
          id: ++id
        },
        ...state.transactions
      ]
      })
    )
  }


  render() {
    return (
      <ErrorBoundary>
        <Wrapper>
          <Balance balance={this.state.balance}/>
          <Form onChange={this.onChange}/>
          <hr/>
           <Transactions transactions={this.state.transactions}/>
        </Wrapper>
      </ErrorBoundary>
    )
  }
}

export default Home;
