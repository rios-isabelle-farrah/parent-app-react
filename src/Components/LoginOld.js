import React, { useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { auth, signInWithGoogle } from "../Services/Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Login.css";


import { AiFillLock } from "react-icons/ai";
import { FcKey } from "react-icons/fc";
import { SiTwitter } from "react-icons/si";
import { FaInstagramSquare } from "react-icons/fa";
import { GrFacebook } from "react-icons/gr";

// import TripLogo from "./Images/hands.png";
import green from "../Components/Images/greenLend.png";
import dsLogo from "../Components/Images/logods.jpeg";
// import flyer from "../Components/Images/flyer.png";
import skinny from "../Components/Images/skinny.png";
// import whatlend from "../Components/Images/whatlend.png";
import psg from "../Components/Images/psg.png";
// import squares from "../Components/Images/squares.png";










function Login() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
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
    <div className="sign-box">
      
      
      
      
      
      
      
    <div className="top">
      <div className="sunydiv">
        <img
          className="ds-logo"
          src={dsLogo}
          style={{
            height: "47px",
            // width: "215px",
            // marginTop: "140px",
            // marginLeft: "30px",
          }}
          alt={"Logo"}
        />
      </div>

     
      <div className="icon-div">
      <div className="social-icons">
        <FcKey />
        <SiTwitter />
        <FaInstagramSquare />
        <GrFacebook />
      </div>
        <button className="sign-in" onClick={signInWithGoogle}>
          <AiFillLock />
          Advocate <br></br>Sign In
        </button>
      </div>
    </div>

    <nav className="nav-login">
      <div className="lend-stretch">
        <img className="green-logo" src={green} alt={"Logo"} />
       
      </div>
    </nav>

    {/* --------------------------------- */}
    {/* Log in */}

    <div className="nav-ul">
      
     
     
    </div>


    {/* --------------------------------------- */}
    <div className="login-body">
    <section className="grabber">
      <div className="grab"><div className="left-MJ">
       
       <img className="skinny" src={skinny} alt={skinny} />
       <div className="moreinfo">
         
</div>
                    
               </div>
       
               <div className="right">
                 <img className="psg" src={psg} alt={psg} />
                 <img className="psgz" src="https://cdn.givecloud.co/s/files/1/0000/0613/files/diverse-adults-virtual-meeting-istock-1254704747.jpg" alt={psg} />
              <div className="us">contact us</div>
               </div></div>
      <div className="footer">something</div>
    </section>

   
  
     
    </div>
  </div>
  );
}
export default Login;