// APP RECEIVES PROP FROM 'MAIN' AND PASSES IT DOWN TO COMPONENTS

import Course from './components/Course'

const App = ({courseInfo}) => {
  
  return (
    <Course course={courseInfo} />
  )
}

export default App