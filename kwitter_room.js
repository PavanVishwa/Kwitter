// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 //ADD YOUR FIREBASE LINKS
var firebaseConfig = {
  apiKey: "AIzaSyBfKV10J7bDsKX5Tlv0MfdiR73IhhT-xX0",
  authDomain: "covid19-thgi.firebaseapp.com",
  databaseURL: "https://covid19-thgi-default-rtdb.firebaseio.com",
  projectId: "covid19-thgi",
  storageBucket: "covid19-thgi.appspot.com",
  messagingSenderId: "631395829108",
  appId: "1:631395829108:web:8b5589c77b66dc417bd821",
    };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="yo "+ user_name  + "!!";

function addRoom(){
  room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({purpose : "adding room name"});
localStorage.setItem("room_name",room_name);
  window.location="kwitter_page.html";
  
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name- "+ Room_names);
row= "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
   
function  redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";
}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
  
}