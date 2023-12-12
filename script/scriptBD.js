import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase ,set,get,ref } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDz4EXt3l7EOpopuhhlNZ6ZsI0J5k0sTbk",
    authDomain: "tela-de-login--2.firebaseapp.com",
    databaseURL: "https://tela-de-login--2-default-rtdb.firebaseio.com",
    projectId: "tela-de-login--2",
    storageBucket: "tela-de-login--2.appspot.com",
    messagingSenderId: "224401762261",
    appId: "1:224401762261:web:c4cd0fd0017b4ba5a07f5c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app)


function writeUserData(userID,name,email){
    set(ref(db, 'users/' + userID),{
        name:name,
        email:email
    })
}

writeUserData(1,"Douglas","dg.7@gmail.com")


console.log("goood")


function readData() {
    const userRef = ref(db, 'users')
    get(userRef).then((snapshot)=>{
        snapshot.forEach((chilsdnapShot)=>{
            console.log(chilsdnapShot.val())
        })
    })
}

readData()
