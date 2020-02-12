import React, { Component } from 'react';
// import { connect } from 'react-redux';
import Message from '../components/message';

class MessageList extends Component {
  renderList() {
    return this.props.messages.map((message) => {
      return (
        <Message key={message.author} message={message} />
      );
    });
  }

  render () {
    return (
      <div>
        {this.renderList()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages
  };
}

export default MessageList;
