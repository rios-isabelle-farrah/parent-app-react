import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Reset from "./Components/Reset";
import Dashboard from "./Components/Dashboard";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route exact path="/register" element={<Register/>}/>
          <Route exact path="/reset" element={<Reset/>}/>
          <Route exact path="/dashboard" element={<Dashboard />}/>
        </Routes>
      </Router>
    </div>
  );
}
export default App;