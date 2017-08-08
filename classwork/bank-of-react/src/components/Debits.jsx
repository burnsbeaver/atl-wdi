import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';
import Transactions from './Transactions'

class Debits extends Component {
  render() {
    const debits = this.props.debits;

    const DebitComponent = debits.map((debit, i) => {
      return <Transactions
                key={i}
                amount={debit.amount}
                date={debit.date}
                description={debit.description}
                />
    })
      return (
          <div>
            <h1>Debits</h1>
            <h3>Account Balance: {this.props.accountBalance}</h3>
            <Link to="/">Home</Link><Link to="/credits">   Credits</Link>
            <h3>New Transaction</h3>
            <form onSubmit={this.props.newDebit}>
              <input type="text" name="amount" placeholder="Amount"/>
              <input type="text" name="description" placeholder="Description"/>
              <input type="submit" value="Add Debit"/>
            </form>
            <h2>Debit History</h2>
            {DebitComponent}
          </div>
      );
  }
}

export default Debits;
