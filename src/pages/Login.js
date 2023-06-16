import React from "react"
import {auth, provider} from "../firebase-config"
import { signInWithPopup } from "@firebase/auth"
import { useNavigate } from "react-router"

function Login(){
    let navigate = useNavigate()
    function signInWithGoogle(){
        signInWithPopup(auth, provider)
        .then((result) => {
            console.log("before setting local storage")
            localStorage.setItem("isAuth", true)
            console.log("after setting local storage")
            navigate("/")
        })
    }

    return(
        <div>
            <p>Sign in with google to continue</p>
            <button onClick={signInWithGoogle}>Sign in with Google</button>
        </div>
    )
}

export default Login