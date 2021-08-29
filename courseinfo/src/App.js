import React from 'react'
const Header = props => {
  return (
    <>
     <h1>
        {props.name}
      </h1>
    </>
  )
} 

const Part = props => {
  return (
    <>
      <p>
        {props.course_name} {props.exercise_number}
      </p>   
    </>
  )
}
const Content = props => {
  return (
    <>
      <Part course_name = {props.parts[0].course_name} exercise_number = {props.parts[0].exercise_number} />
      <Part course_name = {props.parts[1].course_name} exercise_number = {props.parts[1].exercise_number} />
      <Part course_name = {props.parts[2].course_name} exercise_number = {props.parts[2].exercise_number} />
    </>
  )
}

const Total = props => {
  return (
    <>
      <p>
        Number of exercises {props.parts[0].exercise_number + props.parts[1].exercise_number + props.parts[2].exercise_number  }
      </p>
    </>
  )
} 

const App = () => {
  const course =
  {
    title: 'Half Stack application development',
    parts : [
      {
        course_name: 'Fundamentals of React',
        exercise_number: 10
      },
      {
        course_name: 'Using props to pass data',
        exercise_number: 7
      },
      {
        course_name: 'State of a component',
        exercise_number: 14
      }
    ]
  }

  return (
    <>
      <Header name = {course.title} />
      <Content parts = {course.parts}/>
      <Total parts = {course.parts} />
    </>
  )
}

export default App