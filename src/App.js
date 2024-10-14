import './App.css';
import {ReactComponent as Logo} from "./github.svg"
import PDF from "./Reese_Guthier_Resume.pdf";

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Reese Guthier</h1>
        <h3><a href="mailto:rkg460@gmail.com">rguthier25@gmail.com</a></h3>
      </header>
      <div className="mainContent">
        <h2>About me</h2>
        <p>I'm a junior at Towson University majoring in Computer Science with a concentration in Software Engineering. I'm minoring in biology. I have a particular interest in web development. I am interested in software engineering internships in the DMV area. Outside of school, I enjoy horseback riding, reading, and board games.</p>
        <br />
        <div className="buttonContainer">
          <a href={PDF} className="button">Resume</a>
          <a className="button" href="https://github.com/rguthier"> Github profile <Logo /></a>
        </div>
      </div>
    </div>
  );
}

export default App;
