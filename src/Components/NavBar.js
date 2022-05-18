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

import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, Link } from "react-router-dom";

import "./NavBar.css";

import { auth, db, logout } from "../Services/Firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import home from "../Components/Images/homeicon.png"
import log from "../Components/Images/logouticon.png"
import account from "../Components/Images/accounticon.png"
import newicon from "../Components/Images/newicon.png"

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
    fetchUserName();
  }, [user, loading, navigate]);

  return (
    <div className="nav-component">
      {/* <div className="log-out">
        {" "}
        Logged in as
        <div>{name}</div>
        <div>{user?.email}</div>
      </div> */}

      <div className="nav-div">
        <div className="nav-lis">
          <img className="icons" src={home} />
          <Link to={`/files`}>home</Link>
        </div>

        <div className="nav-lis">
          <img className="icons" src={newicon} />
          <div onClick={logout}>Logout</div>
        </div>

        <div className="nav-lis">
          <img className="icons" src={account} />
          <Link to={`/files/file/new`}> new </Link>
        </div>

        <div className="nav-lis">
          <img className="icons" src={log} />
          <div>account</div>
        </div>
      </div>
    </div>
  );
}
export default NavBar;
