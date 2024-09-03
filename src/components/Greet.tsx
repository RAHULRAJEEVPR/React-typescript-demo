type GreetProps={
    name:string
    messageCount?:number
    
}

export default function Greet({name,messageCount}:GreetProps) {
  return (
    <div>
      {name}+{messageCount}
    </div>
  )
}
