import React from 'react'
import Greet from '../Greet'
//useing another components propsType as this component propsType
export default function CustomComponent(props:React.ComponentType<typeof Greet>) {
  return (
    <div>
      {props.name}
    </div>
  )
}
