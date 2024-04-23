import './App.css';
import Navigation from './screens/navigationBar/navigationBar';
import Particles from './components/Particles';
import Header from './screens/header/Header';
import AboutMe from './screens/aboutMe/AboutMe';
import Technologies from './screens/technologies/Technologies';

function App() {
  return (
    <div className="App">
        <Particles id="tsparticles" />
        <Navigation />
        <Header/>
        <AboutMe/>
        <Technologies/>
    </div>
  );
}

export default App;
