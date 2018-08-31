importScripts("https://www.gstatic.com/firebasejs/3.6.1/firebase.js");
importScripts("https://www.gstatic.com/firebasejs/3.5.2/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/3.5.2/firebase-auth.js");
importScripts("https://www.gstatic.com/firebasejs/3.5.2/firebase-database.js");
importScripts("https://www.gstatic.com/firebasejs/3.5.2/firebase-messaging.js");

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

// Add the public key generated from the console here.
// messaging.usePublicVapidKey("BFT3slMCnR1B3YRh5JdLCe_39zewiQ4v7Z59fTjkmxBUBz6WNG6L2IDEo59YyCuNCIfT0wb5FO8Pac8gDcwJXT8");

messaging.requestPermission().then(function() {
    console.log('Notification permission granted.');
    // TODO(developer): Retrieve an Instance ID token for use with FCM.

    // ...
    messaging.getToken().then(function(currentToken) {

    if (currentToken) {
        console.log(currentToken);
        // sendTokenToServer(currentToken);
        // updateUIForPushEnabled(currentToken);
    } else {
        // Show permission request.
        console.log('No Instance ID token available. Request permission to generate one.');
        // Show permission UI.
        // updateUIForPushPermissionRequired();
        // setTokenSentToServer(false);
    }
    }).catch(function(err) {
    console.log('An error occurred while retrieving token. ', err);
    // showToken('Error retrieving Instance ID token. ', err);
    // setTokenSentToServer(false);
    });
}).catch(function(err) {
    console.log('Unable to get permission to notify.', err);
});

messaging.setBackgroundMessageHandler(function(payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    const notificationTitle = 'Background Message from html';
    const notificationOptions = {
        body: 'This is custom notification'
    };

    return self.registration.showNotification(notificationTitle,notificationOptions);
});