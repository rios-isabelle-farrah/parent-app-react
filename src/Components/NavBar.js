// import { useNavigate, Link } from "react-router-dom";
// import "./NavBar.css";
// import { logout } from "../Services/Firebase";

// export default function NavBar() {
//   let navigate = useNavigate();

//   const handleLogout = async () => {
//     try {
//       await logout();
//       return navigate("/");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
 
    //   <div className="nav-div">
    //     <Link to={`/files`}>Home</Link>
        
    //     <div onClick={handleLogout}>Logout</div>
    //   </div>
   
//   );
// }



import React, { useEffect, useState } from "react";
//import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate,Link } from "react-router-dom";
// import NewFiles from "./Files/NewFiles"
import "./Dashboard.css";

import { auth, db, logout } from "../Services/Firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
// import NavBar from "./NavBar.js"
function NavBar() {
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

    <div className="log-out">   Logged in as
         <div>{name}</div>
         <div>{user?.email}</div>
         {/* <button className="dashboard__btn" onClick={logout}>
          Logout
         </button> */}
         </div> 
         {/* <NewFiles/>
         <NavBar/> */}
               <div className="nav-div">
        <Link to={`/files`}>Home</Link>
        
        <div onClick={logout}>Logout</div>
      </div>
       </div>

  );
}
export default NavBar;



