import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

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