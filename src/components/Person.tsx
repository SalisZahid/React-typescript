type personProps={
name:{
    first:string
    last:string
}
}

export default function Person(props:personProps) {
  return (
    <div>{props.name.first} {props.name.last}</div>
  )
}
