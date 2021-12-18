// import {initializeApp} from 'firebase/app'
// import { getFirestore } from 'firebase/firestore/lite';
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

import {ref,onUnmounted} from 'vue'
const firebaseConfig = {
    apiKey: "AIzaSyCU8QhZotrpM53DDxRBhakPTCwsZZLUTtQ",
    authDomain: "nextfire-korn.firebaseapp.com",
    projectId: "nextfire-korn",
    storageBucket: "nextfire-korn.appspot.com",
    messagingSenderId: "450707839345",
    appId: "1:450707839345:web:c9517800ac452aa0abfed0",
    measurementId: "G-638Q8XF8J3"
};
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }
// const firebaseApp = initializeApp(firebaseConfig);
export const firestore = firebase.firestore();
export const storage = firebase.storage();
const usersCollection = firestore.collection('users');
const postCollection = usersCollection.doc('YB9ePSwGJ0MrccRxcSuymOOYDM92').collection('posts');

// export const getUser = async id => {
//     const user = await usersCollection.doc(id).get()
//     return user.exists ? user.data() : null
// }

// export async function getUserWithUsername(username) {
//     const usersRef = firestore.collection('users');
//     const query = usersRef.where('id', '==', 'YB9ePSwGJ0MrccRxcSuymOOYDM92').limit(1);
//     const userDoc = (await query.get()).docs[0];
//     return userDoc;
// }
export async function getMyPost(){
    // const user = await usersCollection.doc('YB9ePSwGJ0MrccRxcSuymOOYDM92').collection('posts').doc('my-first-post').get();
    // return user.exists ? user.data() : 'no data';'
    const snapshot = await usersCollection.doc('YB9ePSwGJ0MrccRxcSuymOOYDM92').collection('posts').orderBy('createdAt', 'desc').get();
    return snapshot.docs.map(doc => doc.data());
}

export async function getPostByName(name){
    // const user = await usersCollection.doc('YB9ePSwGJ0MrccRxcSuymOOYDM92').collection('posts').doc('my-first-post').get();
    // return user.exists ? user.data() : 'no data';'
    const snapshot = await usersCollection.doc('YB9ePSwGJ0MrccRxcSuymOOYDM92').collection('posts').where("title","==",name).get();
    return snapshot.docs.map(doc => doc.data());
}

export const useLoadUsers = () => {
    const posts = ref([])
    const close = postsCollection.orderBy('createdAt', 'desc').onSnapshot(snapshot => {
        posts.value = snapshot.docs.map(doc => doc.data());
    })
    onUnmounted(close)
    return posts;
}