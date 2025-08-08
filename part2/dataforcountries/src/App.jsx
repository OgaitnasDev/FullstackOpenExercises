import { useState, useEffect } from "react"
import countryService from "./services/countryService"
import weatherService from "./services/weatherService"
import Countries from "./components/Countries"


const App = () => {
	const [countries, setCountries] = useState([]);
	const [countryValue, setCountryValue] = useState('');
	const [countryWeather, setCountryWeather] = useState([]);
	const [selectedCountry, setSelectedCountry] = useState(null);

	useEffect(() => {
		countryService.getCountries().then(allCountries => setCountries(allCountries));
	}, [])

	const countryOnChangeHandler = (event) =>{
		setSelectedCountry(null);
		setCountryValue(event.target.value);
	}

	const selectCountry = (country) => {
		if(country.capital){
			var weatherPromises = country.capital.map(c => {
				return weatherService.getCityWeather(c)
			})
			Promise.all(weatherPromises).then(results => setCountryWeather(results)).catch(error => {
				console.log("Couldn't get weather data");
				setCountryWeather([]);
			});
		}else{
			setCountryWeather([]);
		}
		setSelectedCountry(country);
	}

	return(
		<div>
			Find countries: <input value={countryValue} onChange={countryOnChangeHandler}></input>
			<Countries countries={countries} searchTerm={countryValue} selectCountry={selectCountry} selectedCountry={selectedCountry} weather={countryWeather}/>
		</div>
	)
}

export default App
