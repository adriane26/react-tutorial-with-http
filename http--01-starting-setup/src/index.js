import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

// axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
// axios.defaults.headers.common['Authorization'] = 'YOUR AUTH TOKEN';
// axios.defaults.headers.post['Content-Type'] = 'application/json';


axios.interceptors.request.use(config => {
    console.log(config);
    //edit request config
    return config;
}, err => {
    console.log(err);
    return Promise.reject(err);
});

axios.interceptors.response.use(config => {
    console.log(config);
    //edit request config
    return config;
}, err => {
    console.log(err);
    return Promise.reject(err);
})

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
