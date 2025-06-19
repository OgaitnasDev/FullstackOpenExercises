const Persons = (props) => {
  const personsToShow = props.persons.filter(p => p.name.toLowerCase().includes(props.filter.toLowerCase()))

  return(
    <div>
			<table>
				<tbody>
						{personsToShow.map( (p) => <tr key={p.name}><td>{p.name}</td><td>{p.number}</td>
							<td><button onClick={() => props.removeOnClick(p.id, p.name)}>delete</button>
						</td></tr>)}
				</tbody>
			</table>
		</div>
  )
}

export default Persons