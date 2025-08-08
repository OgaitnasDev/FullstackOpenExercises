import CountryData from "./CountryData";

const Button = ({onClick, text}) =>{
    return(
        <button onClick={onClick}>{text}</button>
    )
}

const Countries = (props) => {
    console.log('rendered Countries');

    const foundCountries = props.countries.filter(c =>
        c.name.common.toLowerCase().includes(props.searchTerm.toLowerCase())
        //|| c.name.official.toLowerCase().includes(props.searchTerm.toLowerCase())
        //support native language
        //|| (c.name.nativeName ? Object.values(c.name.nativeName).map(n => Object.values(n)).flat().reduce((ac, cv) => ac || cv.toLowerCase().includes(props.searchTerm.toLowerCase()),false) : false)
    );

    const onShowCountry = (country) => {
        props.selectCountry(country);
    }

    if(props.selectedCountry){
        return(
            <div>
                <CountryData country={props.selectedCountry} weather={props.weather} icon={props.icon}/>
            </div>
        )
    }

    if(props.searchTerm === '') return;

    if(foundCountries.length > 10){
        return(
            <div>
                Too many matches, specify another filter
            </div>
        )
    }

    if(foundCountries.length === 1){
        props.selectCountry(foundCountries[0]);
        return;
    }

    return(
        <div>
            <table>
				<tbody>
					{foundCountries.map(c => <tr key={c.name.common}><td>{c.name.common}</td><td><Button onClick={() => onShowCountry(c)} text={"Show"}/></td></tr>)}
				</tbody>
			</table>
        </div>
    )
}

export default Countries;