import './assets/scss/main.scss';
import DisplayTask from './components/DisplayTask';
import DisplayForm from './components/DisplayForm';


const App = () =>{
  
  return (
    <div className="App">
      <DisplayForm/>
      <DisplayTask/> 
    </div>
  );
}

export default App;
