
var firebaseConfig = {
      apiKey: "AIzaSyD_FO4wcBkj2nH_uU-f1v5jgNK-4IS-Lcg",
      authDomain: "kwitter-bf5a1.firebaseapp.com",
      databaseURL: "https://kwitter-bf5a1-default-rtdb.firebaseio.com",
      projectId: "kwitter-bf5a1",
      storageBucket: "kwitter-bf5a1.appspot.com",
      messagingSenderId: "875894571008",
      appId: "1:875894571008:web:29de90384d73c77686d8e5",
      measurementId: "G-R6FS8YETTJ"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

    function add_room(){
          user_room=document.getElementById("room_name").value;
          localStorage.setItem("user_room",user_room);
          firebase.database().ref("/").child(user_room).update({
                purpose:"Adding Roomname"
          });
          window.location="kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      row="<div class='room_name' id="+Room_names+" onclick='redirecttoroomname(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("user_room");
      window.location="index.html";
      

}
function redirecttoroomname(names){
localStorage.setItem("user_room",names);
window.location="kwitter_page.html"
}
