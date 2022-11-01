import React from "react"

type inputProps={
    value:string
    handleChange?:(event:React.ChangeEvent<HTMLInputElement>)=>void  // passing handler through props
}

export default function Input(props:inputProps) {

    const handleInputChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
        console.log('<<change>>',event)
    }

  return (
    <input type='text' value={props.value} onChange={handleInputChange}/>
  )
}
