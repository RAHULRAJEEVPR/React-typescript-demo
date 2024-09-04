import React from 'react'
type InputProps=React.ComponentProps<"input">
export default function Inputs(props:InputProps) {
  return (
  <input {...props}/>
  )
}
