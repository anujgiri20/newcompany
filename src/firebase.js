import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDu4Z7b7LTGLLl8pQoWmQRHvMFFD6P1WGM",
  authDomain: "newone-675a0.firebaseapp.com",
  projectId: "newone-675a0",
  storageBucket: "newone-675a0.appspot.com",
  messagingSenderId: "1021355394323",
  appId: "1:1021355394323:web:688e66dd94af4829f6c6e6",
  measurementId: "G-8CN5069H55"
};


firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();


export { db };