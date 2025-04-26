const Header = (props) =>{
  return(
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
}

const Content = ({course}) => {
  console.log(course)
  return(
    <div>
      {course.parts.map(p => <Part key={p.id} name={p.name} exercises={p.exercises}/>)}
    </div>
  )
}

const Part = ({name, exercises}) =>{
  console.log("name " , name, " exercise ", exercises)
  return(
    <div>
      <p>{name} {exercises}</p>
    </div>
  )
}

const Total = (props) => {
  return(
    <div>
      <p>Number of exercises {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}</p>
    </div>
  )
}

const Course = ({course}) => {
  return(
    <div>
      <Header course={course} />
      <Content course={course} />
      {/*<Total course={course} />*/}
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App