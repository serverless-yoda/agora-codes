import React from 'react'

import { ReactComponent as Logo} from '../../assets/crown.svg'

import { auth } from '../firebase/firebase.utils'

import { connect } from 'react-redux'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import { 
    HeaderComponent,
    LogoContainer,
    OptionsContainer,
    OptionLinkContainer,
    OptionDivContainer
} from './header.styles'

const Header = ({currentUser, hidden}) => (
    <HeaderComponent>
        <LogoContainer to="/">
            <Logo className="logo"/>
        </LogoContainer>

        <OptionsContainer>
            <OptionLinkContainer to= "/shop">
                SHOP
            </OptionLinkContainer>
            <OptionLinkContainer to= "/shop">
                CONTACT
            </OptionLinkContainer>
            
            {
                currentUser ?
                <OptionDivContainer onClick={() => auth.signOut()}>SIGN-OUT</OptionDivContainer>
                :
                <OptionDivContainer to= "/signin">
                SIGN IN
                </OptionDivContainer>
            }
            <CartIcon/>
        </OptionsContainer>

        {
            !hidden ? <CartDropdown /> : null
        }
        
    </HeaderComponent>
)

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) =>({
    currentUser: currentUser,
    hidden: hidden
})
export default connect(mapStateToProps)(Header)