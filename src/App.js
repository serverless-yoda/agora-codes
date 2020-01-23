import React from 'react';
import {Route, Switch} from 'react-router-dom'
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shops/shops.component'
import Header from './components/header/header.component'
import SignInAndUp from './pages/sign-in-and-up/sign-in-and-up.component'
import { auth , firebaseCreateDocument } from './components/firebase/firebase.utils'

class  App extends React.Component {
  constructor() {
    super()
    this.state = {
      currentUser: null
      
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    console.log('app componentdidmount')
    this.unsubscribeFromAuth = auth.onAuthStateChanged(
     async userAuth => {
       if(userAuth) {
         const userRef = await firebaseCreateDocument(userAuth)
         userRef.onSnapshot(snap => {
           this.setState({
             currentUser: {
               id: snap.id,
               ...snap.data()
             }
           })
         })
         console.log(this.state)
       }
       this.setState({currentUser: userAuth})
     }
    )
  }
  
  //to prevent js leak of user credentials
  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }
  
  render() {
    return (
    <div>
    <Header currentUser={this.state.currentUser}/>
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
