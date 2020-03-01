import React, { Component } from 'react';

import Header from './components/Header';
import MessageContainer from './containers/MessageContainer';
import CartContainer from './containers/CartContainer';
import Footer from './components/Footer';
import {connect} from 'react-redux';
import ProductsContainer from './containers/ProductsContainer'

class App extends Component {
 
    render () {

        return (
            <div >
                <Header/>
                <main id="mainContainer">
                    <div className="container">

                        <ProductsContainer />
                    
                        <MessageContainer />
    
                        <CartContainer />
    
                    </div>
                </main>
    
                <Footer/>
            </div>
        );
    }
   
}

const mapStateToProps = (state, ownProps) => {
    return {
        products: state.products
    }
}
export default connect(mapStateToProps, null) (App) ;
