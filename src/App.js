// import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import { useState } from "react";
import Sidebar from './pages/Sidebar';
import Login from './pages/Login';
import Navbar from "./pages/Navbar";

function App() {
  const [toggleSidebar, setToggleSidebar] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-white-200">
      <Sidebar toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar} />
      <Navbar toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar} />
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
