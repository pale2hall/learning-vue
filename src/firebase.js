import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { signInAnonymously, getAuth } from "firebase/auth";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyB5-u_pSw50BvlJPCKp27lw1wKj-_pJ7oM",
  authDomain: "vue-project-c3cb5.firebaseapp.com",
  projectId: "vue-project-c3cb5",
  storageBucket: "vue-project-c3cb5.appspot.com",
  messagingSenderId: "67183728791",
  appId: "1:67183728791:web:04f02452fbfd031c2d31d2",
  measurementId: "G-QT3MY7806H",
});

const db = getFirestore();
const firebaseAuth = getAuth(firebaseApp);

const dbTools = {
  log_in_anon: function () {
    return signInAnonymously(firebaseAuth);
  },
};

export { firebaseApp, db, dbTools, firebaseAuth};
