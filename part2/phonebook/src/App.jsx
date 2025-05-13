import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Nishizumi Miho', number: '0000000000' },
    { name: 'Takebe Saori', number: '1111111111'},
    { name: 'Isuzu Hana', number:  '2222222222'},
    { name: 'Akiyama Yukari', number: '3333333333' },
    { name: 'Reizei Mako', number: '4444444444' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const personsToShow = persons.filter(p => p.name.toLowerCase().includes(filter.toLowerCase()))

  const addPerson = (event) => {
    event.preventDefault()

    if(!persons.map(p => p.name).includes(newName)){
      const newPerson = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(newPerson))
    } 
    else {
      alert(`${newName} is already added to phonebook`)
      console.log("Person already exists")
    }
    setNewName('')
    setNewNumber('')
  }

	const handleOnChange = (event) => {
		setNewName(event.target.value)
	}
  
  const handleNumberOnChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterOnChange = (event) =>{
    setFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      Filter by name: <input value={filter} onChange={handleFilterOnChange}></input>
      <form  onSubmit={addPerson}>
        <div><h3>Add new</h3></div>
        <div>
          name: <input value={newName} onChange={handleOnChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberOnChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
			<table>
				<tbody>
					{personsToShow.map( (p) => <tr key={p.name}><td>{p.name}</td><td>{p.number}</td></tr>)}
				</tbody>
			</table>
      
    </div>
  )
}

export default App