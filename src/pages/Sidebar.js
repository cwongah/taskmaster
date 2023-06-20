import React from "react";
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { signOut } from "@firebase/auth";
import { auth } from "../firebase-config";
import { useNavigate } from "react-router";

function Sidebar ({toggleSidebar, setToggleSidebar}){
    let navigate = useNavigate()
    function signUserOut(){
        signOut(auth)
        localStorage.clear()
        console.log("logged out")
        navigate("/login")
    }

    return(
        <div 
            className={`${
                toggleSidebar
                    ? "md:left-0 w-full"
                    : "md:left-[-300px] w-0"
            } transition-all duration-500 ease-in-out md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6 overflow-hidden`}
            style={{ left: toggleSidebar ? "0" : "-300px" }}>
            <button onClick={() => setToggleSidebar(!toggleSidebar)}><AiOutlineArrowLeft size={25}/></button>
            <div className={"md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded bg-white"}>
                <div>
                    user info
                </div>
                <div className="flex flex-col items-start">
                    <button onClick={() => navigate("/")}>
                        Dashboard
                    </button>
                    <button onClick={() => navigate("/projects")}>
                        Projects
                    </button>
                    <button>
                        Tasks
                    </button>
                    <button>
                        Calender
                    </button>
                    <button onClick={signUserOut}>
                        Logout
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar