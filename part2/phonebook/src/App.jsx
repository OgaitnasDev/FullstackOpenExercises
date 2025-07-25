import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'
import personService from './services/personService'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [errorStyle, setErrorStyle] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    personService.getAll()
    .then(allPersons => {
      setPersons(allPersons)
    })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    const foundPerson = persons.find(p => p.name === newName)

    if(foundPerson === undefined){
      const newPerson = {
        name: newName,
        number: newNumber
      }
      personService.create(newPerson)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setErrorMessage(`Added ${newName}`);
          setErrorStyle(false);
          setTimeout(() => {
            setErrorMessage(null);
          }, 5000);
        });
      
      
    } 
    else {
      if(confirm(`${foundPerson.name} is already on the phonebook. Replace the old number with a new one?`)){
        updateNumber(foundPerson, newNumber);
      }
    }
    setNewName('')
    setNewNumber('')
  }

  const removePerson = (id, name) =>{
    if(window.confirm(`Delete ${name}?`))
      personService.remove(id).then(response => {
      setPersons(persons.filter(p => p.id !== response.id))
      setErrorMessage(`Removed ${name}`);
      setErrorStyle(false);
    })
    .catch(error => {
      setErrorMessage(`${name} information was already removed!`);
      setErrorStyle(true);
      setPersons(persons.filter(p => p.id !== id))
    });
    setTimeout(() => {
      setErrorMessage(null);
    }, 5000);
  }

  const updateNumber = (person, newNumber) => {
    const changedPerson = { ...person, number: newNumber};
    personService.update(person.id, changedPerson)
    .then(returnedPerson => {
      setPersons(persons.map(p => p.id === person.id ? returnedPerson : p))
      setErrorMessage(`${returnedPerson.name}'s number changed`);
      setErrorStyle(false);
    }).catch(error => {
      console.log(`${person.name} couldn't be found`);
      setPersons(persons.filter(p => p.id !== person.id));
      setErrorMessage(`${person.name} couldn't be found`);
      setErrorStyle(true);
    })
    setTimeout(() => {
      setErrorMessage(null);
    }, 5000)
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
      <Notification message={errorMessage} error={errorStyle}/>
      <Filter value={filter} onChange={handleFilterOnChange}/>
      <PersonForm onSubmit={addPerson} nameValue={newName} nameOnChange={handleNameOnChange} numberValue={newNumber} numberOnChange={handleNumberOnChange} />
      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter} removeOnClick={removePerson}/>
    </div>
  )
}

export default App