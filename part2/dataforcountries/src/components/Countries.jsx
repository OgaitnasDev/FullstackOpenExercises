import CountryData from "./CountryData";

const Countries = (props) => {
    const foundCountries = props.countries.filter(c =>
        c.name.common.toLowerCase().includes(props.searchTerm.toLowerCase())
        //|| c.name.official.toLowerCase().includes(props.searchTerm.toLowerCase())
        //support native language
        //|| (c.name.nativeName ? Object.values(c.name.nativeName).map(n => Object.values(n)).flat().reduce((ac, cv) => ac || cv.toLowerCase().includes(props.searchTerm.toLowerCase()),false) : false)
    );

    if(props.searchTerm === '') return;

    if(foundCountries.length > 10){
        return(
            <div>
                Too many matches, specify another filter
            </div>
        )
    }

    if(foundCountries.length === 1){
        return(
            <div>
                <CountryData country={foundCountries[0]}/>
            </div>
        )
    }

    return(
        <div>
            <table>
				<tbody>
					{foundCountries.map(c => <tr key={c.name.common}><td>{c.name.common}</td></tr>)}
				</tbody>
			</table>
        </div>
    )
}

export default Countries;