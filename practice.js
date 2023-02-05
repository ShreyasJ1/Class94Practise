var firebaseConfig = {
    apiKey: "AIzaSyDvmTLV6pZo9weV1GuK7F9QW4R2Xmk8WIU",
    authDomain: "kwitter-60997.firebaseapp.com",
    databaseURL: "https://kwitter-60997-default-rtdb.firebaseio.com",
    projectId: "kwitter-60997",
    storageBucket: "kwitter-60997.appspot.com",
    messagingSenderId: "706859354583",
    appId: "1:706859354583:web:9f9cc89593ec14ce4ae392",
    measurementId: "G-5MZKSVF4TD"
  };

 firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

function adduser()
{
user_name = document.getElementById("user_name").value;
firebase.database().ref("/").child(user_name).update({
purpose:"adding user"
});
}