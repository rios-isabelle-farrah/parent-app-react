// import firebase from "firebase/compat/app";
// import "firebase/auth";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyBwMDl8ll3S8GBmt8t2nnIBlsrwl4QgtQE",
//   authDomain: "parentapp-8f7b2.firebaseapp.com",
//   projectId: "parentapp-8f7b2",
//   storageBucket: "parentapp-8f7b2.appspot.com",
//   messagingSenderId: "663849424789",
//   appId: "1:663849424789:web:2084f3baad92d7cc90c89c"
// };


// const app = firebase.initializeApp(firebaseConfig);
// export const auth = app.auth();

// const googleProvider = new firebase.auth.GoogleAuthProvider();

// export const signInWithGoogle = async () => {
//   try {
//     await auth.signInWithPopup(googleProvider);
//   } catch (err) {
//     console.log(err.message);
//     return err;
//   }
// };
// export const signup = async (email, password) => {
//     await auth.createUserWithEmailAndPassword(email, password);
// };
// export const login = async (email, password) => {
//     await auth.signInWithEmailAndPassword(email, password);
// };
// export const signOut = async () => {
//   try {
//     await auth.signOut();
//   } catch (err) {
//     console.log(err.message);
//     return <div>Help</div>;
//   }
// };

// import { initializeApp } from "firebase/app";
// import {
//   GoogleAuthProvider,
//   getAuth,
//   signInWithPopup,
//   signInWithEmailAndPassword,
//   createUserWithEmailAndPassword,
//   sendPasswordResetEmail,
//   signOut,
// } from "firebase/auth";
// import {
//   getFirestore,
//   query,
//   getDocs,
//   collection,
//   where,
//   addDoc,
// } from "firebase/firestore";
// const firebaseConfig = {
//   apiKey: "AIzaSyDTybowSzCQr5uQzxzB807N3MYU5J7Loio",
//   authDomain: "cabinetapp-d8dff.firebaseapp.com",
//   projectId: "cabinetapp-d8dff",
//   storageBucket: "cabinetapp-d8dff.appspot.com",
//   messagingSenderId: "1019979504922",
//   appId: "1:1019979504922:web:634e08155da615f66660a3"
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app);
// const googleProvider = new GoogleAuthProvider();
// const signInWithGoogle = async () => {
//   try {
//     const res = await signInWithPopup(auth, googleProvider);
//     const user = res.user;
//     const q = query(collection(db, "users"), where("uid", "==", user.uid));
//     const docs = await getDocs(q);
//     if (docs.docs.length === 0) {
//       await addDoc(collection(db, "users"), {
//         uid: user.uid,
//         name: user.displayName,
//         authProvider: "google",
//         email: user.email,
//       });
//     }
//   } catch (err) {
//     console.error(err);
//     alert(err.message);
//   }
// };
// const logInWithEmailAndPassword = async (email, password) => {
//   try {
//     await signInWithEmailAndPassword(auth, email, password);
//   } catch (err) {
//     console.error(err);
//     alert(err.message);
//   }
// };
// const registerWithEmailAndPassword = async (name, email, password) => {
//   try {
//     const res = await createUserWithEmailAndPassword(auth, email, password);
//     const user = res.user;
//     await addDoc(collection(db, "users"), {
//       uid: user.uid,
//       name,
//       authProvider: "local",
//       email,
//     });
//   } catch (err) {
//     console.error(err);
//     alert(err.message);
//   }
// };
// const sendPasswordReset = async (email) => {
//   try {
//     await sendPasswordResetEmail(auth, email);
//     alert("Password reset link sent!");
//   } catch (err) {
//     console.error(err);
//     alert(err.message);
//   }
// };
// const logout = () => {
//   signOut(auth);
// };
// export {
//   auth,
//   db,
//   signInWithGoogle,
//   logInWithEmailAndPassword,
//   registerWithEmailAndPassword,
//   sendPasswordReset,
//   logout,
// };










import firebase from "firebase/compat/app";
import "firebase/auth";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDTybowSzCQr5uQzxzB807N3MYU5J7Loio",
  authDomain: "cabinetapp-d8dff.firebaseapp.com",
  projectId: "cabinetapp-d8dff",
  storageBucket: "cabinetapp-d8dff.appspot.com",
  messagingSenderId: "1019979504922",
  appId: "1:1019979504922:web:634e08155da615f66660a3"
};

const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();

const googleProvider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    await auth.signInWithPopup(googleProvider);
  } catch (err) {
    console.log(err.message);
    return err;
  }
};
export const signup = async (email, password) => {
    await auth.createUserWithEmailAndPassword(email, password);
};
export const login = async (email, password) => {
    await auth.signInWithEmailAndPassword(email, password);
};
export const signOut = async () => {
  try {
    await auth.signOut();
  } catch (err) {
    console.log(err.message);
    return <div>Help</div>;
  }
};