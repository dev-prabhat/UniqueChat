import firebase from 'firebase/app';
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyBG3uchk1zRvFXXd8jYNz_6Q3STpbImIiA",
    authDomain: "uniquechat-93196.firebaseapp.com",
    projectId: "uniquechat-93196",
    storageBucket: "uniquechat-93196.appspot.com",
    messagingSenderId: "104728178222",
    appId: "1:104728178222:web:6c6008020319bcac0339bf"
}).auth();