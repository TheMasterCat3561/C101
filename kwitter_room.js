
//AGREGA TUS ENLACES DE FIREBASE AQUÍ
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyAqyHcdYfUPRCvBESJ5QnB-cni8Ju4hnLw",
      authDomain: "pruebaclase-a9a9c.firebaseapp.com",
      projectId: "pruebaclase-a9a9c",
      storageBucket: "pruebaclase-a9a9c.appspot.com",
      messagingSenderId: "1046588587604",
      appId: "1:1046588587604:web:93c1e8c1e43294c05777c1"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicia el código

      //Finaliza el código
      });});}
getData();
