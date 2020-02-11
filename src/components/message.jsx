import React from 'react';

const Message = (props) => {
  return (
    <div className="message-container">${props.message.author} ${props.message.content}></div>
  );
};

export default Message;
