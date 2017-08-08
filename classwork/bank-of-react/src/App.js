import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import axios from 'axios';
import Home from './components/Home';
import UserProfile from './components/UserProfile'
import Debits from './components/Debits'
import Credits from './components/Credits'


class App extends Component {
  constructor(){
    super()

    this.state = {
      debits: [],
      credits: [],
      accountBalance: 0,
      currentUser: {
        userName: 'bbeaver',
        memberSince: 2004
      }
    }
  }

  _getDebits = () => {
    console.log('getting data')
    axios.get('/debits')
      .then((res) => {
        this.setState({debits: res.data})
        console.log(this.state.debits)
      })
      .catch(err => console.error(err));
  }
  _newDebit = (e) => {

    console.log('NEW DEBIT HIT')
  }
  _getCredits = () => {
    axios.get('/credits')
      .then((res) => {
        this.setState({credits: res.data})
        console.log(this.state.credits)
      })
  }

  _calcAccountBalance = () => {
    const totalCredits = this.state.credits.reduce((totalCredits, credit) => {
      return totalCredits + credit.amount
    }, 0)

    const totalDebits = this.state.debits.reduce((totalDebits, debit) => {
      return totalDebits + debit.amount
    }, 0)

    return totalCredits - totalDebits
  }

  componentWillMount(){
    console.log('mounting')
    this._getDebits()
    this._getCredits()
  }


  render() {
    const accountBalance = this._calcAccountBalance()
    const newDebit = this._newDebit()

    this._calcAccountBalance()
    const HomeComponent = () => (<Home accountBalance={accountBalance}/>);
    const DebitsComponent = () => (<Debits newDebit={newDebit} debits={this.state.debits} accountBalance={accountBalance}/>)
    const CreditsComponent = () => (<Credits credits={this.state.credits} accountBalance={accountBalance}/>)
    const UserProfileComponent = () => (
        <UserProfile
          userName={this.state.currentUser.userName}
          memberSince={this.state.currentUser.memberSince}  />
    );
    return (
        <Router>
          <div>
            <Route exact path="/" render={HomeComponent}/>
            <Route exact path="/userProfile" render={UserProfileComponent}/>
            <Route exact path="/debits" render={DebitsComponent}/>
            <Route exact path="/credits" render={CreditsComponent}/>
          </div>
        </Router>
    );
  }
}

export default App;
