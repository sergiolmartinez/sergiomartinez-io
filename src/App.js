// import '../App.css';
import construction from './assets/under-construction.png'

function App() {
  return (
    <div className="App">
      <h1>Welcome to sergiomartinez.io</h1>
      <div><h3>Site is under construction</h3></div>
      <img src={construction} class="rounded mx-auto d-block" alt="under-construction-png" />
    </div>
  );
}

export default App;
