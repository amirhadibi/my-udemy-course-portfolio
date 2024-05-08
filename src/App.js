import './App.css';
import Navigation from './screens/navigationBar/navigationBar';
import Particles from './components/Particles';
// Header from './screens/header/Header';
import AboutMe from './screens/aboutMe/AboutMe';
import Technologies from './screens/technologies/Technologies';
import Portfolio from './screens/portfolio/Portfolio';
import ContactMe from './screens/contactMe/ContactMe';

function App() {
  return (
    <div className="App">
        <Particles id="tsparticles" />
        <Navigation />
        <AboutMe/>
        <Technologies/>
        <Portfolio />
        <ContactMe />
    </div>
  );
}

export default App;
