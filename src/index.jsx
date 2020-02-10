// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

import MessagesReducer from './reducers/messages_reducer';
import SelectedChannelReducer from './reducers/selected_channel_reducer';

const identityReducer = (state = null) => state;

const initialState = {
  messages: [],
  channelList: ['general', 'react', 'paris'],
  currentUser: prompt('What is your username?') || `anonymous${Math.floor(10 + (Math.random() * 90))}`,
  selectedChannel: 'general'
}

// State and reducers
const reducers = combineReducers({
  channels: identityReducer,
  currentUser: identityReducer,
  messages: MessagesReducer,
  selectedChannel: SelectedChannelReducer
});

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
