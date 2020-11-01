import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
       <Person></Person>
        
      </header>
    </div>
  );
}


function Person(){
  return(
        <div style={{border:'2px solid red',padding:'10px'}}>
          <h2>Anisur Rahman Nayan</h2>
          <h3>Zero of the year</h3>
        </div>
  )}

export default App;
