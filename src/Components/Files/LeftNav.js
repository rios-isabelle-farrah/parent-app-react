// import React, { useState } from "react";

// const LeftNav = ({ id, handleReport }) => {

//   return (
//     <>
 
//       <div className="left-nav">
        
//             <button onClick={handleReport} className="files-new-button">
//               🗂 Generate Report    
//             </button>
       
//       </div>
   
//         <div>
//           <div className="left-nav-mb">


         
//               <div className="nav-meetings">
//                 <button onClick={handleReport} className="files-new-button">
//                   🗂 Generate Report    
//                 </button>
//               </div>
      

    
//           </div>
//         </div>
      
//     </>
//   );
// };

// export default LeftNav;



import React, { useState } from "react";
import { Link } from "react-router-dom";
import ModalNewMeetingForm from "../Modals/ModalNewMeetingForm.js";
//import "./LeftNav.css";

const LeftNav = ({ id, handleReport }) => {
  const [showEForm, setShowEForm] = useState(false);
  const [showComp, setShowComp] = useState(false);

  return (
    <>
      <img
        src="https://uxwing.com/wp-content/themes/uxwing/download/07-web-app-development/hamburger-menu.png"
        style={{ height: "40px", width: "40px" }}
        className="hamb"
        onClick={() => setShowComp(!showComp)}
        alt="menu"
      />

      <div className="left-nav">
        {showEForm && (
          <ModalNewMeetingForm
            setShowEForm={setShowEForm}
            showEForm={showEForm}
          />
        )}
        
        <div className="chrome">
          <div
            className="nav-meetings"
            onClick={() => setShowEForm(!showEForm)}
          >
            <p> ✚ Enter meeting</p>
          </div>
        </div>

     

        <div className="chrome">
          <div className="nav-meetings">
            <button onClick={handleReport} className="files-new-button">
              🗂 Generate Report    
            </button>
          </div>
        </div>

        <div className="chrome">
          <div className="nav-meetings">
            <Link to={`/files/${id}/meetings`}>📕 meeting Table</Link>
          </div>
        </div>





      </div>
      {showComp && (
        <div>
          <div className="left-nav-mb">
            {showEForm && (
              <ModalNewMeetingForm
                setShowEForm={setShowEForm}
                showEForm={showEForm}
              />
            )}
   
            <div className="chrome">
              <div
                className="nav-meetings"
                onClick={() => setShowEForm(!showEForm)}
              >
             
                <p>✚ Enter meeting </p>
               
              </div>
            </div>

            

            <div className="chrome">
              <div className="nav-meetings">
                <button onClick={handleReport} className="files-new-button">
                  🗂 Generate Report    
                </button>
              </div>
            </div>

            <div className="chrome">
              <div className="nav-meetings">
                <Link to={`/files/${id}/meetings`}>📕 meeting Table</Link>
              </div>
            </div>

            
          </div>
        </div>
      )}
    </>
  );
};

export default LeftNav;
