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
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    user_room=localStorage.getItem("user_room");

    function send(){
          msg=document.getElementById("msg").value;
          firebase.database().ref(user_room).push({
                Name:user_name,
                Message:msg,
                Like:0
          });
          document.getElementById("msg").value="";
    }

      function getData() { firebase.database().ref("/"+user_room).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
            console.log(firebase_message_id);
            console.log(message_data);
            name=message_data['Name'];
         message=message_data['Message'];
            like=message_data['Like'];
            name_tag="<h4>"+name+"<img src='tick.png' class= 'user_tick'></h4>";
            msg_tag="<h4 class='message_h4'>"+message+"</h4>";
            like_btn="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updatelike(this.id)'>";
            span_tag="<span class='glyphicon glyphicon-thumb-up' >Like:"+like+"</span></button><hr>";
            row=name_tag+msg_tag+like_btn+span_tag;
            document.getElementById("output").innerHTML+=row;


      } });  }); }
getData();
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("user_room");
      window.location="index.html";
      

}

function updatelike(msg_id){
button_id=msg_id;
likes=document.getElementById(button_id).value;
update_like=Number(likes)+1;
firebase.database().ref(user_room).child(msg_id).update({
    Like:update_like 
});
}
