const PersonForm = (props) => {
  return(
    <div>
      <div><h2>Add new</h2></div>
      <form  onSubmit={props.onSubmit}>
        <div>
          name: <input value={props.nameValue} onChange={props.nameOnChange} />
        </div>
        <div>
          number: <input value={props.numberValue} onChange={props.numberOnChange}/>
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  )
}

export default PersonForm