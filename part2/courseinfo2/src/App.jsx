// APP RECEIVES PROP FROM 'MAIN' AND PASSES IT DOWN TO COMPONENTS

import Course from "./components/Course";

const App = ({ courseInfo }) => {

  return (
    <div>
      <Course course={courseInfo} />
    </div>
  );
};

export default App;
