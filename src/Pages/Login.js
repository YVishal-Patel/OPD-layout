import React, {useState} from 'react'
import { UserAuthModule } from './ProtectedRoutes'
import { useNavigate } from 'react-router-dom'

function Login() {

  const [user, setUser] = useState('')

  const navigate = useNavigate()
 
  const protect = UserAuthModule()

  const handleLogin = () =>{
    protect.login(user)
    navigate('/profile')
  }

  return (
    <>
    Name: <input type="text" value={user} onChange={(e)=> setUser(e.target.value)} />
    <button onClick={handleLogin}>Login</button>
    </>
  )
}

export default Login