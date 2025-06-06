import {useState} from 'react'

const Button = ({onClick, text}) => {
	return <button onClick={onClick}>{text}</button>
}

const StatisticLine = ({text, value}) => {
	return(
		<tr>
			<td>{text}</td>
			<td>{value}</td>
		</tr>
	)
}

const Statistics = ({good, neutral, bad, all, average, positive}) => {
	if(all === 0) return(
		<div>
			<h1>statistics</h1>
			<p>No feedback given</p>
		</div>
	)

	return(
		<div>
			<h1>statistics</h1>
			<table>
				<tbody>
					<StatisticLine text={"good"} value={good}/>
					<StatisticLine text={"neutral"} value={neutral}/>
					<StatisticLine text={"bad"} value={bad}/>
					<StatisticLine text={"all"} value={all}/>
					<StatisticLine text={"average"} value={average}/>
					<StatisticLine text={"positive %"} value={positive}/>
				</tbody>
			</table>
		</div>
	)
}

const App = () => {
	// save clicks of each button to its own state
	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)
	const [positive, setPositive] = useState(0)
	const [all, setAll] = useState(0)
	const [average, setAverage] = useState(0)

	const goodClick = () => {
		const currentGood = good + 1
		const currentAll = currentGood + neutral + bad
		setAll(currentAll)
		setAverage((currentGood - bad) / currentAll)
		setPositive(currentGood / currentAll * 100)
		setGood(currentGood)
	}

	const neutralClick = () => {
		const currentNeutral = neutral + 1
		const currentAll = good + currentNeutral + bad
		setAll(currentAll)
		setAverage((good - bad) / currentAll)
		setPositive(good / currentAll * 100)
		setNeutral(currentNeutral)
	}

	const badClick = () => {
		const currentBad = bad + 1
		const currentAll = good + neutral + currentBad
		setAll(currentAll)
		setAverage((good - currentBad) / currentAll)
		setPositive(good / currentAll * 100)
		setBad(currentBad)
	}

	return(
		<div>
			<h1>give feedback</h1>
			<Button onClick={goodClick} text={'good'}/>
			<Button onClick={neutralClick} text={'neutral'}/>
			<Button onClick={badClick} text={'bad'}/>
			<Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive}/>
		</div>
	)
}

export default App