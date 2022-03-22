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

  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = 'Welcome' + user_name + '!';
  
   function addUser()
   {
         room_name=document.getElementById("room_name").value;
  
         firebase.database().ref("/").child(user_name).update({
              pupose:"adding user"
          });
  
          localStorage.setItem("room_name",room_name);
  
          window.location="Letschat_page.html";
  } 
  
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
         Room_names = childKey;
        console.log("Room Names -"+Room_names);
        row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
        document.getElementById("output").innerHTML +=row;
        });});}
  getData();
  
  function redirectToRoomName(name)
  {
        console.log(name);
        localStorage.setItem("room_name",name);
        window.location="Letschat_page.html";
  }
  
  function logout()
  {
        localStorage.removeItem("user_name");
        localStorage.removeItem("room_name");
        window.location ="Letschat.html";
  }