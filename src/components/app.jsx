import React from 'react';
import MessageList from '../containers/message_list';

const messages = [
  {
    "author":"anonymous92",
    "content":"Hello world!",
    "created_at":"2017-09-26T23:03:16.365Z"
  },
  {
    "author":"anonymous77",
    "content":"My name is anonymous77",
    "created_at":"2017-09-26T23:03:21.194Z"
  }
];

const App = () => {
  return (
    <div className="app">
      <MessageList messages={messages} />
    </div>
  );
};

export default App;
