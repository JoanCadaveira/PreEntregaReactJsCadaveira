import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIJNNKuZSI9ewEIG03Ss4xezIqnkpfeeU",
  authDomain: "ecommerse-85e61.firebaseapp.com",
  projectId: "ecommerse-85e61",
  storageBucket: "ecommerse-85e61.appspot.com",
  messagingSenderId: "605079778475",
  appId: "1:605079778475:web:0bfae75426985f86b5f3ee"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

