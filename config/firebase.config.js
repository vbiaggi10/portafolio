var appFireBase = {};
(() => {
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDBu2P47XPQs_HdqLaogo1LmrxXo4vvfmE",
    authDomain: "portfoliovbg.firebaseapp.com",
    databaseURL: "https://portfoliovbg.firebaseio.com",
    projectId: "portfoliovbg",
    storageBucket: "portfoliovbg.appspot.com",
    messagingSenderId: "3397410905",
    appId: "1:3397410905:web:0142f223aa85a78b839148",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  appFireBase = firebase;
  // appFireBase.prototype.setData = ()
})();
