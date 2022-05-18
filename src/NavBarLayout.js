import { Outlet } from 'react-router-dom';
import NavBar from "./Components/NavBar"

const NavBarLayout = () => (
  <>
    <NavBar />
    <Outlet />
  </>
);
export default NavBarLayout;