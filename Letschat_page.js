//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyB6BtYwC8mXpjty4ayMN47A6utlaBk5LxQ",
      authDomain: "well-eatery-d08c4.firebaseapp.com",
      databaseURL: "https://well-eatery-d08c4-default-rtdb.firebaseio.com",
      projectId: "well-eatery-d08c4",
      storageBucket: "well-eatery-d08c4.appspot.com",
      messagingSenderId: "72985383344",
      appId: "1:72985383344:web:c2c458e81ad3a1d0288675",
      measurementId: "G-P52TEFEFSF"
    };

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
      console.log(firebase_message_id);
      console.log(message_data);
      name = message_data['name'];
      message = message_data['message'];
      like = message_data['like'];
      name_with_tag = "<h4>" + name + "<img class='user_tick' src='tick.png'></h4>";
      message_with_tag = "<h4 class='message_h4'>"+message+"</h4>";
Like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
      span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like:"+like+"</span></button><hr>";

      row = name_with_tag + message_with_tag + Like_button + span_with_tag;
      document.getElementById("output").innerHTML += row;

//End code
 } });  }); }
getData();

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");


function send(){
 msg=document.getElementById("msg").value;
 firebase.database().ref(room_name).push()({
       name:user_name,
       like:0,
       message:msg
 });
 document.getElementById("msg").value=" ";
 
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location ="Letschat.html";
}

function updateLike(message_id){
      console.log("clicked on like button -" + message_id);
      button_id=message_id;
      likes = document.getElementById(button_id).value;
      updated_likes=Number(likes) + 1;
      console.log(updated_likes);
      
      firebase.database().ref(room_name).child(message_id).update({
            like: updated_likes
      });
}
