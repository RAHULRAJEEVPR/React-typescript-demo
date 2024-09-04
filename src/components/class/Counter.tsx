import React,{ ReactNode } from "react";

type CounterProps={
    message:string
}
type CounterState={
    count:number
}
export class Counter extends React.Component<CounterProps,CounterState>{
    state={
        count:0
    }
    handleclick=()=>{
        this.setState((prevState)=>({count:prevState.count+1}))
    }
    render() {
      return(
        <div>
<button onClick={this.handleclick}>increment</button>
{this.props.message} {this.state.count}
        </div>
      )  
    }
}