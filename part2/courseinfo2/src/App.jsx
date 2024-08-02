// APP RECEIVES PROP FROM 'MAIN' AND PASSES IT DOWN TO COMPONENTS

import Course from "./components/Course";

const App = ({ courseList }) => {

  return (
    
    <div>
      <h1>Web Development Curriculum</h1>
      {courseList.map(course => <Course key={course.id} course={course} />)}
      {/* <Course course={courseList} /> */}
    </div>
  );
};

export default App;
