import './App.css';
import { Button } from './components/Button';
import { Systems } from './components/systems';
// import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <Button />
      <Systems systemType='OK' />
    </div>
  );
}

export default App;
