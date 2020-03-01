import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cart from './../components/Cart'
import CartItem from './../components/CartItem'
import CartResult from './../components/CartResult'
import PropTypes from 'prop-types';
import * as Message from './../constants/Message';
import {removeProductInCart, actChangeMessage, actUpdateProductInCart} from './../actions/index';

class CartContainer extends Component {

    render() {
      var {cart} = this.props;
    //   console.log(cart);
      return(
        <Cart>
            {this.showCartItem(cart)}
            {this.showTotalAmount(cart)}
        </Cart>
      )
    }

     showCartItem = (cart) => {
     var result =  <tr><td>{ Message.MSG_CART_EMPTY}</td></tr>;
    var {onDeleteProductInCart, onChangeMessage, onUpdateProductInCart} = this.props;
        if(cart.length > 0) {
            result = cart.map((item, index) => {
                return <CartItem
                    item = {item} 
                    key= {index} 
                    index={index}
                    onDeleteProductInCart = {onDeleteProductInCart}
                    onChangeMessage = {onChangeMessage}
                    onUpdateProductInCart = {onUpdateProductInCart}

                />
            }) 
        }
        return result;
    }
    showTotalAmount = (cart) => {
        var result = null;

        if(cart.length > 0) {
            result = <CartResult cart = {cart} />
        }    
        return result;
    }
}

CartContainer.propTypes = {
    cart: PropTypes.arrayOf(PropTypes.shape({
        product :  PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            description: PropTypes.string.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired,
        }).isRequired,
        quantity: PropTypes.number.isRequired
    })).isRequired,
    onChangeMessage: PropTypes.func.isRequired,
    
}
const mapStateToProps = (state, ownProps) => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteProductInCart : (product) => {
            dispatch(removeProductInCart(product))
        },
        onChangeMessage: (message) => {
            dispatch(actChangeMessage(message))
        },
        onUpdateProductInCart: (product, quantity)=> {
            dispatch(actUpdateProductInCart(product, quantity))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);

