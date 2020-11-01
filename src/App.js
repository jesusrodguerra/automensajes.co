import './App.css';
import Header from './components/Header';
import Card from './components/Cards';
import MapSection from './components/MapSection';
import Beneficios from './components/Beneficios';
import Testimonios from './components/Testimonios';
import Ejemplos from './components/Ejemplos';
import Licencia from './components/Licencia';
import Atributos from './components/Atributos';
import Estrategia from './components/Estrategia';

function App() {
  return (
    <div className="App">
      <Header/>
      <Card/>
      <MapSection/>
      <Beneficios/>
      <Testimonios/>
      <Ejemplos/>
      <Licencia/>
      <Atributos/>
      <Estrategia/>
    </div>
  );
}

export default App;
