import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'John Doe' }
  ]) 
  const [newName, setNewName] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    
    if(!persons.map(p => p.name).includes(newName)){
      const newPerson = {
        name: newName
      }
      setPersons(persons.concat(newPerson))
    } 
    else {
      alert(`${newName} is already added to phonebook`)
      console.log("Person already exists")
    }
    setNewName('')
  }

	const handleOnChange = (event) => {
		setNewName(event.target.value)
	}

  return (
    <div>
      <h2>Phonebook</h2>
      <form  onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleOnChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
			<table>
				<tbody>
					{persons.map( (p) => <tr key={p.name}><td>{p.name}</td></tr>)}
				</tbody>
			</table>
      
    </div>
  )
}

export default App