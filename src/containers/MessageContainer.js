import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Message from './../components/Message';
// import * as Message from './../constants/Message';
class MessageContainer extends Component {

    render() {
      var {message} = this.props;
    //   console.log(cart);
      return(
        <Message message = {message}/>
      )
    }
}


MessageContainer.propTypes = {
    message: PropTypes.string.isRequired
}
const mapStateToProps = (state, ownProps) => {
    return {
        message: state.message
    }
}
export default connect(mapStateToProps, null)(MessageContainer);

