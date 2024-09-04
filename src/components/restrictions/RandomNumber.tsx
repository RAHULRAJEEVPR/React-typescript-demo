type RandomNumberType={
    value:number
}

type PositiveNumber=RandomNumberType &{
    isPositive:boolean
    isNegative?:never
    isZero?:never
}

type NegativeNumber =RandomNumberType & {
    isNegative:boolean
    isPositive?:never
    isZero?:never
}
type Zero =RandomNumberType & {
    isZero:boolean
    isNegative?:never
    isPositive?:never
}
type RandomNumberprops=PositiveNumber | NegativeNumber | Zero


export default function RandomNumber({value,isPositive,isNegative,isZero}:RandomNumberprops) {
  return (
    <div>
      {value} {isPositive && "postive"} {isNegative && "negative"} {" "} {isZero && "zero"}
    </div>
  )
}
