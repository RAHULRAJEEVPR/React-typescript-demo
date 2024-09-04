import React from 'react'

type TextOwnProps<E extends React.ElementType>={
    size?:"sm"|"md"|"lg"
    color?:"primary"|"secondary"
    children:React.ReactNode
    as?:E
}
type TextProps<E extends React.ElementType>=TextOwnProps<E> & Omit<React.ComponentProps<E>,keyof TextOwnProps<E>>



export default function Text<E extends React.ElementType="div">({size,color,children,as}:TextOwnProps<E>) {
    const Component=as||"div"

  return (
    <Component className={`class-with-${size}-${color}`}>
      {children}
    </Component>
  )
}
