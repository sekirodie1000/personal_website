import logo from './logo.svg';
import './App.css';
import { NavBar } from './component/NavBar';
import { Banner } from './component/Banner';
import { AboutMe} from './component/AboutMe';
import { Projects } from './component/Projects';
import { Contact } from './component/Contact';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
