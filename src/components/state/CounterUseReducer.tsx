import React,{useReducer} from 'react'
const initialState={count:0}
type CounterState={count:number}
type ActionType={
    type:string
    payload:number
}
type resetType={
    type:"reset"
}
function reducer(state:CounterState,action:ActionType | resetType){
    switch(action.type){
        case "inc":
            return {count:state.count+action.payload}
        case "dec":
            return {count:state.count-action.payload}
        case "reset":
            return initialState
            default:
            return state;
    }
}

export default function CounterUseReducer() {
    const [state,dispatch]=useReducer(reducer,initialState)
  return (
    <div>
      count:{state.count}
    <button onClick={()=>dispatch({type:"inc",payload:10})}>
        increament 10
    </button>
    <button onClick={()=>dispatch({type:"dec",payload:10})}>
        decreament 10
    </button >
    <button onClick={()=>dispatch({type:"reset"})}>reset</button>
    </div>
  )
}
