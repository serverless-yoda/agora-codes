import React from 'react';
import {Route, Switch} from 'react-router-dom'
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shops/shops.component'
import Header from './components/header/header.component'
import SignInAndUp from './pages/sign-in-and-up/sign-in-and-up.component'
import { auth } from './components/firebase/firebase.utils'

class  App extends React.Component {
  constructor() {
    super()
    this.state = {
      currentUser: null
    }
  }

  unsubscibeFromAuth = null;

  componentDidMount() {
    this.unsubscibeFromAuth = auth.onAuthStateChanged(
      user => this.setState({
        currentUser: user
      },() => console.log(user))
    )
  }
  
  //to prevent js leak of user credentials
  componentWillUnmount() {
    this.unsubscibeFromAuth()
  }
  
  render() {
    return (
    <div>
    <Header/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndUp} />
        </Switch>
        
    </div>
  );
  }
  
}

export default App;
