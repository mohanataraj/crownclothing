
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlPUIgHamLd3FfT3veNseo80Aq2V_CcTI",
  authDomain: "crown-clothing-db-a97ec.firebaseapp.com",
  projectId: "crown-clothing-db-a97ec",
  storageBucket: "crown-clothing-db-a97ec.appspot.com",
  messagingSenderId: "47682322901",
  appId: "1:47682322901:web:02fc8fe44470d5a640fd5c"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db,'users', userAuth.uid)
  console.log(userDocRef)

  const userSnapShot = await getDoc(userDocRef)
  console.log("SNAPSHOT", userSnapShot)
  console.log(userSnapShot.exists())

  if(!userSnapShot.exists()){
    const { displayName, email } = userAuth;
    const createdAt = new Date()

    try{
      await setDoc(userDocRef,{
        displayName, email, createdAt
      })
    }catch(error){
      console.log('Error creating the user',error)
    }
  }
  return userDocRef;
}