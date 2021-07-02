var firebaseConfig = {
  apiKey: "AIzaSyCAvHhaOgzo5XF4P-99NZI8MZG1YFYjodY",
  authDomain: "let-s-chat-e0c62.firebaseapp.com",
  projectId: "let-s-chat-e0c62",
  storageBucket: "let-s-chat-e0c62.appspot.com",
  messagingSenderId: "863933094139",
  appId: "1:863933094139:web:191ef16d3fef4c3eddf85e",
  measurementId: "G-4BTY0H84FT"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");

 

    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    
     
    
    function addroom()
    
    {
    
      room_name = document.getElementById("room_name").value;
    
     
    
      firebase.database().ref("/").child(room_name).update({
    
        purpose : "adding room name"
    
      });
    
     
    
        localStorage.setItem("room_name", room_name);
    
        
    
        window.location = "kwitter_page.html";    
    
    }
    
     
    
    function getData() { 
    
       firebase.database().ref("/").on('value', function(snapshot) {
    
          document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
    
           Room_names = childKey;
    
           console.log("Room Name - " + Room_names);
    
          row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
    
          document.getElementById("output").innerHTML += row;
    
        });
    
      });
    
     
    
    }
    
     
    
    getData();
    
     
    
    function redirectToRoomName(name)
    
    {
    
      console.log(name);
    
      localStorage.setItem("room_name", name);
    
        window.location = "kwitter_page.html";
    
    }
    
     
    
    function logout() {
    
    localStorage.removeItem("user_name");
    
    localStorage.removeItem("room_name");
    
        window.location = "kwitter.html";
    
    }