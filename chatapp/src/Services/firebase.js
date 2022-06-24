import React from 'react';
import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCg5ezO_A1ePJzOranK8BA2r-5-GTe_hRA",
    authDomain: "webappchat-b2365.firebaseapp.com",
    projectId: "webappchat-b2365",
    storageBucket: "webappchat-b2365.appspot.com",
    messagingSenderId: "656293667193",
    appId: "1:656293667193:web:7951b74316717602884fa8",
    measurementId: "G-QRYX8TJ6DY"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;