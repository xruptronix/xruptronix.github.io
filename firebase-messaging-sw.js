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
        // console.log(currentToken);
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

messaging.onMessage(function(payload) {
    console.log('Message received. ', payload);
// ...
});