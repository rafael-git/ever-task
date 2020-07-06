import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyB_DPOzFBYidtuCqEnKq9-KSJDOLqWGzgs",
    authDomain: "evertask-project.firebaseapp.com",
    databaseURL: "https://evertask-project.firebaseio.com",
    projectId: "evertask-project",
    storageBucket: "evertask-project.appspot.com",
    messagingSenderId: "665975571752",
    appId: "1:665975571752:web:3747b0aa3489430a093c1d",
    measurementId: "G-XZMVL15BPY"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    
    if (!userAuth) return;
    
    
    const userRef = firestore().doc(`users/${userAuth.uid}`);
    
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const taskArray = [];
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                taskArray,
                ...additionalData

            })
        }
        catch (error) {
            console.log('Error creaating user', error.message);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore;

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
