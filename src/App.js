import './App.css';
import { NavBar } from './components/NavBar';
import { Home } from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TechSkills } from './components/TechSkills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="App">
     <NavBar />
     <Home />
     <TechSkills />
     <Projects />
     <Contact />
    </div>
  );
}

export default App;
