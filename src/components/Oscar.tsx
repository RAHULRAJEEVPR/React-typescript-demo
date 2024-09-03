import React, { Children, ReactNode } from 'react'
type OscarProps={
    children:ReactNode
}
export default function Oscar({children}:OscarProps) {
  return (
    <div>
      {children}
    </div>
  )
}
