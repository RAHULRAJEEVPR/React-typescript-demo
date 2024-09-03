type InputProps={
    value:string
    handleChange:(e:React.ChangeEvent<HTMLInputElement>)=>void
}

export default function Input({value,handleChange}:InputProps) {
  return (
   <input type="text" onChange={handleChange} value={value} />
  )
}
