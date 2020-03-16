import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import * as serviceWorker from './serviceWorker';

const firebaseConfig = {
    apiKey: "AIzaSyBfiIGhnZCnMt0Xi6B59HaKCR99V8SYCXQ",
    authDomain: "my-project-1524245806574.firebaseapp.com",
    databaseURL: "https://my-project-1524245806574.firebaseio.com",
    projectId: "my-project-1524245806574",
    storageBucket: "my-project-1524245806574.appspot.com",
    messagingSenderId: "1066376510914",
    appId: "1:1066376510914:web:f7477b0e4f8f7eb9f56a5b",
    measurementId: "G-Q2JHJVJE5L"
};
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
