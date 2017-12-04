import * as firebase from 'firebase';


const config = {
  apiKey: "AIzaSyAayQ1lKCImVhbILW0CduSFy8T2YqAnlBM",
  authDomain: "internetprog-a92ce.firebaseapp.com",
  databaseURL: "https://internetprog-a92ce.firebaseio.com",
  projectId: "internetprog-a92ce",
  storageBucket: "internetprog-a92ce.appspot.com",
  messagingSenderId: "389013781678"
};

export const firebaseApp = firebase.initializeApp(config);
