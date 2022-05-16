

// import React, { useEffect, useState } from "react";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { useNavigate } from "react-router-dom";
// import "./Dashboard.css";
// import { auth, db, logout } from "../Services/Firebase";
// import { query, collection, getDocs, where } from "firebase/firestore";
// // import { firebase } from 'firebase/compat/app';
// function Dashboard() {
//  const [user, loading, error] = useAuthState(auth);
//  const [name, setName] = useState("");
//  const navigate = useNavigate();
//  const fetchUserName = async () => {
//    try {
//      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
//      const doc = await getDocs(q);
//      const data = doc.docs[0].data();
//      setName(data.name);
//    } catch (err) {
//      console.error(err);
//      alert("An error occured while fetching user data");
//    }
//  };
//  useEffect(() => {
//    if (loading) return;
//    if (!user) return navigate("/");
//    fetchUserName();
//  }, [user, loading]);
//  return (
//    <div className="dashboard">
//       <div className="dashboard__container">
//        Logged in as
//         <div>{name}</div>
//         <div>{user?.email}</div>
//         <button className="dashboard__btn" onClick={logout}>
//          Logout
//         </button>
//       </div>

//     </div>
//  );
// }
// export default Dashboard;


//import { signInWithGoogle, signup, login } from "../Services/Firebase";

import React, { useEffect, useState } from "react";
//import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import NewFiles from "./Files/NewFiles"
import "./Dashboard.css";
import { auth, db, logout } from "../Services/Firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
function Dashboard() {
  const [user, loading] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    const fetchUserName = async () => {
      try {
        const q = query(collection(db, "users"), where("uid", "==", user?.uid));
        const doc = await getDocs(q);
        const data = doc.docs[0].data();
        setName(data.name);
      } catch (err) {
        console.error(err);
        alert("An error occured while fetching user data");
      }
    };
    fetchUserName()
  }, [user, loading, navigate]);
  
  return (
<div className="d-board">    
<div className="dashboard__container">
        Logged in as
         <div>{name}</div>
         <div>{user?.email}</div>
         <button className="dashboard__btn" onClick={logout}>
          Logout
         </button>
       </div>
     <NewFiles/>
     </div>
  );
}
export default Dashboard;



