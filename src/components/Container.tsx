
type Containerprop={
    style:React.CSSProperties
}

export default function Container({style}:Containerprop) {
  return (
    <div style={style}>
      style as props
    </div>
  )
}
