import './App.css';
import { Button } from './components/Button';
import { Systems } from './components/systems';

function App() {
  return (
    <div className="App">
      <Button />
      <Systems systemType='OK' onClick={() => console.log('OK system clicked')} />
      <Systems systemType='Warning' />
      <Systems systemType='Error' />
      <Systems systemType='Critical' />
      <Systems systemType='Offline' />
      {/* <Systems systemType='Other' /> */}
    </div>
  );
}

export default App;
