import React, { Component } from 'react';

class CartResult extends Component {
    showTotalPrice = (cart) => {
        var total = 0;
        if(cart.length > 0) {
            total = cart.map((item, index)=> {
                // console.log(total);
                return  (item.product.price * item.quantity)
            })
            total = total.reduce((a, b) => a + b, 0)
        }
        return total
    }
    render() {
        var {cart} = this.props;
        return (
            <tr>
                <td colSpan="3"></td>
                <td>
                    <h4>
                        <strong>Tổng Tiền</strong>
                    </h4>
                </td>
                <td>
                    <h4>
        <strong>{this.showTotalPrice(cart)}$</strong>
                    </h4>
                </td>
                <td colSpan="3">
                    <button type="button" className="btn btn-primary waves-effect waves-light">Complete purchase
                                            <i className="fa fa-angle-right right"></i>
                    </button>
                </td>
            </tr>
        );
    }

}

export default CartResult;
