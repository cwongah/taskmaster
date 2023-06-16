import React from "react"
import { AiOutlineMenu} from 'react-icons/ai'

function Navbar({toggleSidebar, setToggleSidebar}){
    return(
        <div>
            <button onClick={() => setToggleSidebar(!toggleSidebar)}><AiOutlineMenu size={35} color="white" /></button>
        </div>
    )
}

export default Navbar