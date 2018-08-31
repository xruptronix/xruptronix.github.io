importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-messaging.js');

var config = {
    apiKey: "AIzaSyBALhU8Y1tGlNT5YS8mZjJebxf0Kv5JHYI",
    authDomain: "message-e2ad2.firebaseapp.com",
    databaseURL: "https://message-e2ad2.firebaseio.com",
    projectId: "message-e2ad2",
    storageBucket: "message-e2ad2.appspot.com",
    messagingSenderId: "61436109614"
};

firebase.initializeApp(config);
const messaging = firebase.messaging();