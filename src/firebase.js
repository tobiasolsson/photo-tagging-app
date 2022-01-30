// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBrIJ0ebCgdhcR4FBz8KGsDjzpYZo4zvdY',
  authDomain: 'waldo-96a80.firebaseapp.com',
  projectId: 'waldo-96a80',
  storageBucket: 'waldo-96a80.appspot.com',
  messagingSenderId: '733749770010',
  appId: '1:733749770010:web:f7b45b5049340bffd35ea3',
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// eslint-disable-next-line import/prefer-default-export
export { db };
