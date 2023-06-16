// import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import { useState } from "react";
import Sidebar from './pages/Sidebar';
import Login from './pages/Login';
import Navbar from "./pages/Navbar";
import Dashboard from "./pages/Dashboard";

function App() {
  const [toggleSidebar, setToggleSidebar] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-white-200">
      <Router>
        <Sidebar toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar} />
        <Navbar toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar} />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;