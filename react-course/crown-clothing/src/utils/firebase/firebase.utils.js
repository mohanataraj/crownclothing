
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, 
  signOut, onAuthStateChanged} from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs, addDoc } from 'firebase/firestore'
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

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();

//console.log("Auth obj: ", auth)
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth,googleProvider)

export const db = getFirestore();

export const addCollectionAndDocuments = async(collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey)
  const batch = writeBatch(db)
  try{
    objectsToAdd.forEach((object)=>{
      const docRef = doc(collectionRef, object.title.toLowerCase())
      batch.set(docRef, object)
    })
  }catch(error){
    console.log("Error", error)
  }finally{
    await batch.commit()
    console.log('commit done!')
  }
}
export const addCollections = async (collectionKey, arrayToAdd) =>{
  const collectionRef = collection(db,collectionKey)
  //const batch = writeBatch(db)
  try {
     arrayToAdd.forEach(async (item)=>{
        await addDoc(collectionRef, item)
      .then(docRef => {
        console.log(item.id, "added successfully!!!")
      })
      //batch.set(docRef,item.id)
    })
  } catch (error) {
    console.log("Write failed!!!",error)
  }finally{
    //await batch.commit()
    console.log("Write done!!!")
  }
}


export const getCategoriesAndDocuments = async (collectionKey) => {
  const collectionRef = collection(db,collectionKey)
  const q = query(collectionRef)

  const querySnapShot = await getDocs(q)
  //console.log("Query SnapShot", querySnapShot)
  const categoryMap = querySnapShot.docs.reduce((acc,docSnapshot)=>{
    const {title, items} = docSnapshot.data()
    acc[title.toLowerCase()]= items
      return acc
  },{})

  return categoryMap
}

export const getCategoriesDocs = async () =>{
  const collectionRef = collection(db,'categories-manager')
  const q = query(collectionRef)

  const querySnapShot = await getDocs(q)

  const categoriesArray = querySnapShot.docs.map((doc)=> doc.data())
  // reduce((acc,doc)=>{
  //   console.log("DATA",doc.data())
  //   acc[doc.data().id] = doc.data()
  // })
   //console.log("CATEG",categoriesArray)
   return categoriesArray
}

// displayName : is assumed to be gotten off from userAuth object...
// when displayName is not got from userAuth obj we add it as additional information...
export const createUserDocumentFromAuth = async (userAuth, additionalInformation={}) => {

  
  const userDocRef = doc(db,'users', userAuth.uid)
  //console.log(userDocRef)

  const userSnapShot = await getDoc(userDocRef)
  //console.log("USER SNAPSHOT", userSnapShot)  

  if(!userSnapShot.exists()){
    const { displayName, email } = userAuth;
    const createdAt = new Date()

    try{
      await setDoc(userDocRef,{
        displayName, email, createdAt, ...additionalInformation
      })
    }catch(error){
      if(error.code === 'auth/email-already-in-use'){
        alert('Email already in use');
      }else{
        console.log('Error creating the user',error)
      }
    }
  }
  return userDocRef;
}

export const creatAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password){
    return;
  }

  return await createUserWithEmailAndPassword(auth,email, password);
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password){
    return;
  }

  return await signInWithEmailAndPassword(auth,email, password);
}

export const signOutUser = async () => await signOut(auth);
// opens a listener stream ... 
export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);

/**
 * Listener : class has 3 methods - used to interact with the event stream...
 * 
 * next: (nextVal) => points to our callback... called everytime new event occurs... and event is passed into our next callback
 * error: (error) => when error exists in the event
 * complete: ()=> closed then no more events...
 * 
 * Can listen at any point 
 * and can have multiple listerner for the event streams 
 * and every listner can react in different ways...
 */