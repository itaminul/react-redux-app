import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './components/assets/vendor/bootstrap/css/bootstrap.min.css'
import './components/assets/vendor/icofont/icofont.min.css'
import './components/assets/vendor/boxicons/css/boxicons.min.css'
import './components/assets/vendor/animate.css/animate.min.css'
import './components/assets/vendor/owl.carousel/assets/owl.carousel.min.css'
import './components/assets/vendor/venobox/venobox.css'
import './components/assets/css/style.css'

import store from './app/store'
import { Provider } from 'react-redux'


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
