import GeneralInfo from "./Components/Generalinfo";
import Education from "./Components/Education";
import Experience from "./Components/Experience";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center"}}>CV Builber Application</h1>

      <GeneralInfo />
      <Education />
      <Experience />

    </div>
  );
}

export default App;
