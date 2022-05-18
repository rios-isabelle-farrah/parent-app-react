import { Outlet } from 'react-router-dom';
import NavBar from "./Components/NavBar"
import "./NavBarLayout"

const NavBarLayout = () => (
  <>
    <Outlet />
   <div className="nav-component">
   <NavBar />
       </div> 
  </>
);
export default NavBarLayout;