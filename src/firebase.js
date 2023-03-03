import { initializeApp } from 'firebase/app'
// eslint-disable-next-line no-unused-vars
import { getFirestore, collection } from 'firebase/firestore'
import { useFirebaseAuth } from 'vuefire';
// import { createApp } from 'vue'
// import { useCollection } from 'vuefire'

 initializeApp({
  apiKey: "AIzaSyB5-u_pSw50BvlJPCKp27lw1wKj-_pJ7oM",
  authDomain: "vue-project-c3cb5.firebaseapp.com",
  projectId: "vue-project-c3cb5",
  storageBucket: "vue-project-c3cb5.appspot.com",
  messagingSenderId: "67183728791",
  appId: "1:67183728791:web:04f02452fbfd031c2d31d2",
  measurementId: "G-QT3MY7806H"
})

const db = getFirestore();
const auth = useFirebaseAuth();

export { db, auth };


