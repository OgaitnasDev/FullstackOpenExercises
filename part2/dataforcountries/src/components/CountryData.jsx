const CountryData = ({country}) =>{
    console.log(country);

    const flagStyle = {
        fontSize: '30em'
    }

    return(
        <div>
            <h1>{country.name.common}</h1>
            <table>
                <tbody>
                    <tr><td>Capital {country.capital[0]}</td></tr>
                    <tr><td>Area {country.area}</td></tr>  
                </tbody>
            </table>
            <h2>Languages</h2>
            <ul>{Object.values(country.languages).map(l => <li key={l}>{l}</li>)}</ul>
            <b style={flagStyle}>{country.flag}</b>
        </div>
    )
}

export default CountryData;