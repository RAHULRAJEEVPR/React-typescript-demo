import React from 'react'
type ListProps<T>={
    items:T[]
    onClick:(value:T)=>void
}
export default function List <T extends string | number>({items,onClick}:ListProps<T>) {
  return (
    <div>
      <h2>list of items</h2>
      {items.map((item,index)=>{
        return (
            <div key={index} onClick={()=>onClick(item)}>
                {item}
            </div>
        )
      })}
    </div>
  )
}
