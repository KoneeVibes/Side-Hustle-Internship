import './App.css';
import  ActionButton  from './components/ActionButton';

function App() {
  return (
    <div className="App">
      <h1>It works <span><ActionButton text={'click me'}/></span> </h1>     
    </div>
  );
}

export default App;
