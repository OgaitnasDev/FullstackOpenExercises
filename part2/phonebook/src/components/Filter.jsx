const Filter = (props) => {
  return(
    <div>
      Filter by name: <input value={props.value} onChange={props.onChange}></input>
    </div>
  )
}

export default Filter