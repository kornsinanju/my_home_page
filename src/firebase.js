import {initializeApp} from 'firebase/app'
import { getFirestore, collection, getDocs,query,orderBy,where } from 'firebase/firestore/lite';
// import { query, orderBy, limit } from "firebase/firestore";  

// import { getFirestore } from 'firebase/firestore/lite';
// import firebase from 'firebase/compat/app'
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
// import 'firebase/compat/storage';

// import {ref,onUnmounted} from 'vue'
const firebaseConfig = {
    apiKey: "AIzaSyCU8QhZotrpM53DDxRBhakPTCwsZZLUTtQ",
    authDomain: "nextfire-korn.firebaseapp.com",
    projectId: "nextfire-korn",
    storageBucket: "nextfire-korn.appspot.com",
    messagingSenderId: "450707839345",
    appId: "1:450707839345:web:c9517800ac452aa0abfed0",
    measurementId: "G-638Q8XF8J3"
};
// if(!firebase.apps.length){
//     firebase.initializeApp(firebaseConfig);
//   }
// const firebaseApp = initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
// export const firestore = firebase.firestore();
const db = getFirestore(app);
// const usersCollection = collection(db,'users');
// const postCollection = usersCollection.doc('YB9ePSwGJ0MrccRxcSuymOOYDM92').collection('posts');

export async function getMyPost(){
    // const user = await usersCollection.doc('YB9ePSwGJ0MrccRxcSuymOOYDM92').collection('posts').doc('my-first-post').get();
    // return user.exists ? user.data() : 'no data';'
    const q = query(collection(db,'users','YB9ePSwGJ0MrccRxcSuymOOYDM92','posts'),orderBy('createdAt', 'desc'),where("published","==",true))
    const snapshot = await getDocs(q); 
    return snapshot.docs.map(doc => doc.data());
}

export async function getPostByName(name){
    // const user = await usersCollection.doc('YB9ePSwGJ0MrccRxcSuymOOYDM92').collection('posts').doc('my-first-post').get();
    // return user.exists ? user.data() : 'no data';'
    const q = query(collection(db,'users','YB9ePSwGJ0MrccRxcSuymOOYDM92','posts'),where("title","==",name),where("published","==",true))
    // const snapshot = await collection(db,'users','YB9ePSwGJ0MrccRxcSuymOOYDM92','posts').where("title","==",name).get();
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => doc.data());
}
