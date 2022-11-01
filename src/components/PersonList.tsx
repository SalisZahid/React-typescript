type personListProps={
    names:{
        first:string
        last:string
    }[]
}

export default function PersonList(props:personListProps) {
  return (
    <div>
      {props.names.map(name=>
        <h2 key={name.first}>{name.first} {name.last}</h2>)}
    </div>
  )
}
