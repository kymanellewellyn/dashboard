import * as firebase from 'firebase';


var firebaseConfig = {
    apiKey: "",
    authDomain: "admin-4fb4b.firebaseapp.com",
    databaseURL: "https://admin-4fb4b.firebaseio.com",
    projectId: "admin-4fb4b",
    storageBucket: "admin-4fb4b.appspot.com",
    messagingSenderId: "422493367693",
}

firebase.initializeApp(config);
const databaseRef = firebase.database().ref();
export const todosRef = databaseRef.child("")