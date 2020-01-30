import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import './App.css';

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shops/shops.component'
import Header from './components/header/header.component'
import SignInAndUp from './pages/sign-in-and-up/sign-in-and-up.component'
import CheckOutPage from './pages/checkout/checkout.component'


//import { auth , firebaseCreateDocument, createCollectionAndDocument } from './components/firebase/firebase.utils'
import { auth , firebaseCreateDocument} from './components/firebase/firebase.utils'


import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.action'
//import { selectCollectonsForPreview } from './redux/shop/shop.selector'
//import { createStructuredSelector } from 'reselect'
class  App extends React.Component {
  

  unsubscribeFromAuth = null;

  componentDidMount() {
  
   //const {setCurrentUser, collectionsArray } = this.props
   const {setCurrentUser} = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(
     async userAuth => {
       if(userAuth) {
         const userRef = await firebaseCreateDocument(userAuth)
         userRef.onSnapshot(snap => {
           setCurrentUser({
               id: snap.id,
               ...snap.data()
           })
         })
        
       }
       setCurrentUser(userAuth)
       //createCollectionAndDocument('collections',collectionsArray.map(({title,items}) => ({title,items})))
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
    <Header/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route  path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckOutPage} />
          <Route exact path="/signin" 
            render= {() => this.props.currentUser ? (<Redirect to="/" />): (<SignInAndUp/>)}
          />
        </Switch>
        
    </div>
  );
  }
  
}


const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
})


// const mapStateToProps = createStructuredSelector({
//   currentUser: setCurrentUser
//   collectionsArray: selectCollectonsForPreview
// })
  

const  mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps,mapDispatchToProps)(App);
