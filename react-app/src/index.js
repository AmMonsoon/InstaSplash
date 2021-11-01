import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import configureStore from './store';
import { ModalProvider } from './components/context/Modal';
import { BrowserRouter } from 'react-router-dom';

const store = configureStore();
function Root() {
  return (
    <ModalProvider>
      <Provider store={store}>
        <BrowserRouter>
        <App />
        </BrowserRouter>
      </Provider>
    </ModalProvider>
  )
}

ReactDOM.render(
  <React.StrictMode>
        <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
