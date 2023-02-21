import './App.css';
import { ItemConteiner } from './components/ItemConteiner/ItemConteiner';
import { Navbar } from './components/Navbar/Navbar.js';


function App() {


  return (
    <div className="App">
      <Navbar />
      <ItemConteiner Welcome="No tengas miedo ¡Comprate todo lo que quieras!"/>
    </div>
  );
}

export default App;
