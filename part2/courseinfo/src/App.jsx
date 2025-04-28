const Header = (props) =>{
  return(
    <div>
      <h1>{props.course.name}</h1>
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

const Course = ({course}) => {
  return(
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return(
    <div>
      {courses.map((c) => <Course key={c.id} course={c} />)}
    </div>
  )
}

export default App