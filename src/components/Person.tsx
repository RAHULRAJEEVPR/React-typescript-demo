import { PersonProps } from "./Person.type"
export default function Person({name}:PersonProps) {
  return (
    <div>
      <h1>full name = {name.first}{name.last}</h1>
    </div>
  )
}
