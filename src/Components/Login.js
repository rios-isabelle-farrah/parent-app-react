import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, signInWithGoogle } from "../Services/Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Login.css";
// import tallTriangle from "./Images/tallTriangle"
import brownfile from "./Images/brownfile.png";


function Login() {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/files");
  }, [user, loading, navigate]);

  return (
    <div className="login-div">
      <div className="login-files"></div>

      <div className="login-triangle">
        <img src={brownfile} className="brown-tri" alt="tri" />

        <div className="bold-text">
          Cabinet is the perfect app for parent advocates and caregivers.{" "}
        </div>
<br>
</br>
      <div className="grey-x">

      <div className="small-font">
        It allows you to organize and store important data like special education meetings right from your phone. 
        </div>
        <button className="sign-in" onClick={signInWithGoogle}>
 Google Sign In
      </button>
      </div>
      </div>
{/* <div className="bottom-grey">
</div> */}
   
    </div>
  );
}
export default Login;
