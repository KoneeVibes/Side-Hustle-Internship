import './App.css';
import Button from './components/Button';
import { useEffect } from 'react';


function App() {

  useEffect(() => {

    alert('Welcome to Konee Site')
  
  })

  return (
    <div className="App">
     <Button/>
    </div>
  );
}

export default App;
