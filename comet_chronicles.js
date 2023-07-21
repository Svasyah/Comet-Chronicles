var firebaseConfig = {
    apiKey: "AIzaSyD6RHKbPPJKJ-aAJLt6yO-g58ZnNEsTQnk",
    authDomain: "comet-chronicles-45437.firebaseapp.com",
    projectId: "comet-chronicles-45437",
    storageBucket: "comet-chronicles-45437.appspot.com",
    messagingSenderId: "1010406718035",
    appId: "1:1010406718035:web:6b37ad9ac1969c1977e4a6",
    measurementId: "G-HJ771RGCYR"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();

function send()
{
msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
});
document.getElementById("msg").value=" ";
}