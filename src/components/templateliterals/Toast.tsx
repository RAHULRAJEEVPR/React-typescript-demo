import React from 'react'
type HorizontalPositions="left"|"center"|"right"
type VerticalPostion="top"|"center"|"bottom"
type ToastProps={
    postion:Exclude<`${HorizontalPositions}-${VerticalPostion}`,"center-center"> | "center"
}
export default function Toast({postion}:ToastProps) {
  return (
    <div>
      Toast Notification Postion - {postion}
    </div>
  )
}
