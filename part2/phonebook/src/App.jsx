import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3001/persons')
    .then(response => {
      setPersons(response.data)
    })
  }, [])

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

	const handleNameOnChange = (event) => {
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
      <Filter value={filter} onChange={handleFilterOnChange}/>
      <PersonForm onSubmit={addPerson} nameValue={newName} nameOnChange={handleNameOnChange} numberValue={newNumber} numberOnChange={handleNumberOnChange} />
      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter} />
    </div>
  )
}

export default App