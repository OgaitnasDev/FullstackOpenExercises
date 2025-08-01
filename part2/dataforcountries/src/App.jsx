import { useState, useEffect } from "react"
import countryService from "./services/countryService"
import Countries from "./components/Countries"


const App = () => {
	const [countries, setCountries] = useState([])
	const [countryValue, setCountryValue] = useState('')

	useEffect(() => {
		countryService.getCountries().then(allCountries => setCountries(allCountries));
	}, [])

	const countryOnChangeHandler = (event) =>{
		setCountryValue(event.target.value);
	}

	return(
		<div>
			Find countries: <input value={countryValue} onChange={countryOnChangeHandler}></input>
			<Countries countries={countries} searchTerm={countryValue} />
		</div>
	)
}

export default App
