import './App.css';
import Demmo from './Components/DemoCommponent/Demmo';
import Nav from './Components/NavComponent/Nav';
import HelpMenu from './Components/HelpComponent/Help';

function App() {
  return (
    <div className="App">
      <Nav />
      <Demmo />
      <HelpMenu />
    </div>
  );
}

export default App;
