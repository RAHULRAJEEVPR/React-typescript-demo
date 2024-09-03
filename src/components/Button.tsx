type ButtonProps={
    handleClick:(e:React.MouseEvent<HTMLButtonElement>,id:number)=>void
}

export default function Button({handleClick}:ButtonProps) {
  return (
  <button onClick={(e)=>handleClick(e,2)}>Click</button>
  )
}
