import { useState, useEffect } from "react"
import countryService from "./services/countryService"
import Countries from "./components/Countries"


const App = () => {
	const [countries, setCountries] = useState([])
	const [countryValue, setCountryValue] = useState('')
	const [selectedCountry, setSelectedCountry] = useState(null);

	useEffect(() => {
		countryService.getCountries().then(allCountries => setCountries(allCountries));
	}, [])

	const countryOnChangeHandler = (event) =>{
		setSelectedCountry(null);
		setCountryValue(event.target.value);
	}

	const selectCountry = (country) => {
		setSelectedCountry(country);
	}

	return(
		<div>
			Find countries: <input value={countryValue} onChange={countryOnChangeHandler}></input>
			<Countries countries={countries} searchTerm={countryValue} selectCountry={selectCountry} selectedCountry={selectedCountry}/>
		</div>
	)
}

export default App
