const Course = ({course}) => {
	return(
		<div>
		<Header course={course} />
		<Content course={course} />
		<Total course={course} />
		</div>
	)
}

const Header = (props) =>{
  return(
    <div>
      <h2>{props.course.name}</h2>
    </div>
  )
}

const Content = ({course}) => {
  return(
    <div>
      {course.parts.map(p => <Part key={p.id} name={p.name} exercises={p.exercises}/>)}
    </div>
  )
}

const Part = ({name, exercises}) =>{
  return(
    <div>
      <p>{name} {exercises}</p>
    </div>
  )
}

const Total = ({course}) => {
  const total = course.parts.reduce((accumulator, currentValue) => accumulator + currentValue.exercises, 0)

  return(
    <div>
      <p><b>total of {total} exercises</b></p>
    </div>
  )
}

export default Course