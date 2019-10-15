import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './modules/axios';
import './modules/rem';
import './style/main.scss';
import store from './store'
import {HashRouter as Router} from 'react-router-dom'
import {Provider} from 'react-redux'
import '../node_modules/swiper/css/swiper.min.css'

ReactDOM.render(
    <Provider store = {store}>
        <Router>
            <App />
        </Router>
    </Provider>
    , document.getElementById('root'));
