import React from 'react'
import Login from './Login'
import { ProfileProps } from './Profile'

type PrivateProps={
    isLoggedin:boolean
    component:React.ComponentType<ProfileProps>
}

export default function Private({isLoggedin,component:Component}:PrivateProps) {
    if(isLoggedin){
        return <Component name={"rahul"}/>
    }else{ 
        return <Login/>
    }

}
