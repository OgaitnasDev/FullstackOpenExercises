const CountryData = ({country, weather}) =>{
    if(!country) return;

    console.log(weather);

    const flagStyle = {
        fontSize: '25em'
    }

    if(weather.length > 0){
        return(
            <div>
                <div>
                    <h1>{country.name.common}</h1>
                    <table>
                        <tbody>
                            <tr><td>Capital:</td></tr>
                            {country.capital.map(c => <tr><td>{c}</td></tr>)}
                            <tr><td>Area: {country.area} km<sup>2</sup></td></tr>  
                        </tbody>
                    </table>
                    <h2>Languages</h2>
                    <ul>{Object.values(country.languages).map(l => <li key={l}>{l}</li>)}</ul>
                </div>
                <div style={flagStyle}>{country.flag}</div>
                {weather.map((w, i) =>
                    <div key={country.capital[i]}> 
                        <h2>Weather in {country.capital[i]}</h2>
                        <table>
                            <tbody>
                                <tr><td>Temperature {(w.main.temp - 273.15).toFixed(2)} Centigrades</td></tr>
                                <tr><td><img src={`https://openweathermap.org/img/wn/${w.weather[0].icon}@2x.png`} alt="Weather Icon"/></td></tr> 
                                <tr><td>Wind {w.wind.speed} m/s</td></tr>
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        )
    }

    if(country.capital){
        return(
            <div>
                <div>
                    <h1>{country.name.common}</h1>
                    <table>
                        <tbody>
                            <tr><td>Capital:</td></tr>
                            {country.capital.map(c => <tr><td>{c}</td></tr>)}
                            <tr><td>Area: {country.area} km<sup>2</sup></td></tr> 
                        </tbody>
                    </table>
                    <h2>Languages</h2>
                    <ul>{Object.values(country.languages).map(l => <li key={l}>{l}</li>)}</ul>
                </div>
                <div style={flagStyle}>{country.flag}</div>
            </div>
        )
    }

    return(
        <div>
            <div>
                <h1>{country.name.common}</h1>
                <table>
                    <tbody>
                        <tr><td>Area: {country.area} km<sup>2</sup></td></tr> 
                    </tbody>
                </table>
                <h2>Languages</h2>
                <ul>{Object.values(country.languages).map(l => <li key={l}>{l}</li>)}</ul>
            </div>
            <div style={flagStyle}>{country.flag}</div>
        </div>
    )
}

export default CountryData;