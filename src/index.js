import React from 'react';

import { GiftSearchApp } from './GitSearchApp';

import ReactDOM from 'react-dom';
import './index.css';

const divRoot = document.querySelector('#root');
//Rederizando page
// ReactDOM.render(<CounterApp></CounterApp>, divRoot);
ReactDOM.render(<GiftSearchApp></GiftSearchApp>, divRoot);
