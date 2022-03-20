var firebaseConfig = {
      apiKey: "AIzaSyBTbpUBOjJjDpZ94eMNr_fAH61FgBO_7MY",
      authDomain: "devaank-a23bc.firebaseapp.com",
      databaseURL: "https://devaank-a23bc-default-rtdb.firebaseio.com",
      projectId: "devaank-a23bc",
      storageBucket: "devaank-a23bc.appspot.com",
      messagingSenderId: "580347868052",
      appId: "1:580347868052:web:911578e1aa10bc448ad581"
    };

    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

    function send() {
          msg = document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name: user_name,
                message: msg,
                like: 0
          });

          document.getElementById("msg").value = "";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

