import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'John Doe' }
  ]) 
  const [newName, setNewName] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
		const newPerson = {
			name: newName
		}
		setPersons(persons.concat(newPerson))
  }

	const handleOnChange = (event) => {
		setNewName(event.target.value)
		
		console.log('hello', newName)
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
					{persons.map( (p, index) => <tr key={p.name + String(index)}><td>{p.name}</td></tr>)}
				</tbody>
			</table>
      
    </div>
  )
}

export default App