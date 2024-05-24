// import logo from './logo.svg';
import '../App.css';

import NavBar from "../components/NavBar";
import Home from '../pages/Home';

function App() {
  return (
    <div className="App">
     <NavBar></NavBar>
     <Home></Home>
      {/* <header className="App-header">
       <h1 className='text-6xl text-red-500 bg-purple-200'>Amayuru indeewara</h1>
      </header> */}
    </div>
  );
}

export default App;
