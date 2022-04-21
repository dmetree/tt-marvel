import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { composeWithDevTools } from 'redux-devtools-extension'


import {createStore, applyMiddleware, compose} from 'redux'
import reducer from './redux/reducer'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'


const composeEnhancers = composeWithDevTools({})
const store = createStore(
    reducer, composeEnhancers(
    applyMiddleware(thunk)
));



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
     <App />
    </Provider>
  </React.StrictMode>
);

