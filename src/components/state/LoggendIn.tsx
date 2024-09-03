import React,{useState} from 'react'

type UserType=
    {
        name:string
        email:string
    } 

export default function LoggendIn() {
  const [user,setUser]=useState<UserType | null>(null)
    const handleLogin=()=>{
        setUser({
            name:"Rahil",
            email:"123@gmail.com"
        })
    }
    const handleLogout=()=>{
        setUser(null)
    }
  return (
    <div>
      <button onClick={handleLogin}>login</button>
      <button onClick={handleLogout}>logout</button>
      <div>user is</div>
    </div>
  )
}
