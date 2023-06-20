import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Signup(){
    const [newEmail, setNewEmail] = useState('')
    const [newPw, setNewPw] = useState('')
    const navigate = useNavigate()
    console.log(newPw)
    console.log(newEmail)

    return(
        <div>
            <div>
                Signup
            </div>
            <input
                id="email"
                type='text'
                placeholder='Email'
                value={newEmail}
                onChange={(e)=>setNewEmail(e.target.value)}
            />
            <input 
                id='password'
                type='password'
                placeholder='Password'
                value={newPw}
                onChange={(e)=>setNewPw(e.target.value)}
            />
            <button onClick={()=>navigate('/login')}>
                Have an account?
            </button>
        </div>
    )
}

export default Signup