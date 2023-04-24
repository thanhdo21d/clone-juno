import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Provider } from 'react-redux';
import rootReducer from './redux/rootReducer.js';
import { createStore } from 'redux';

const store = createStore(rootReducer); // Khởi tạo store của Redux

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
);
