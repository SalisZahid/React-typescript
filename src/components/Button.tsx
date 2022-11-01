import React from "react"

type buttonProps={
    // handleClick: ()=>void // no parameter or returns any value
    handleClick: (event:React.MouseEvent<HTMLButtonElement>,id:number)=>void // no parameter or returns any value
}

export default function Button(props:buttonProps) {
  return (
    <button onClick={(event)=>props.handleClick(event,1)}>Click</button>
  )
}
