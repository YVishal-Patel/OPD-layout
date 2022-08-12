import React, {useState, useContext, createContext} from 'react'

const userAuth = createContext(null)

export const ProtectedRout =  ({children}) => {
 const [user, setUser] = useState(null)

 const login = () =>{
   setUser(user)
 }

 const logOut = ()=>{
   setUser(null)
 }
  return (
    <>
    <userAuth.Provider value={{user, login, logOut}}>
    {children}
    </userAuth.Provider>

    </>
  )
}

export const UserAuthModule = () =>{
  return useContext(userAuth)
}