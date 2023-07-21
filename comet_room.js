
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
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
  
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    console.log("Room Name-" + Room_names);
    row="<div class='room_name' id="+Room_names+" onclick='redirect ToRoomName(this.id)'>#"+Room_names+"</div><hr>";
    document.getElementById("output").innerHTML += row;

    //End code
    });});}
getData();

user_name = localStorage.getItem("user_name");
document.getElementById("user").innerHTML="welcome" + user + "!";

function addRoom()
{
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
    });
    localStorage.setItem("room_name", room_name);
    window.location="comet_chronicles.js"
}

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
window.location="comet_chronicles.html";

function logout()
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";
}}