import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchMessages } from '../actions';
import Message from '../components/message';

class MessageList extends Component {
  componentWillMount() {
    this.fetchMessages();
  }

  fetchMessages = () => {
    this.props.fetchMessages(this.props.selectedChannel);
  }

  renderList() {
    return this.props.messages.map((message) => {
      return (
        <Message key={message.author} message={message} />
      );
    });
  }

  render () {
    return (
      <div className="channel-container">
        <div className="channel-content">
          {this.renderList()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMessages }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
