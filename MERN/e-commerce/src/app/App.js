// import logo from './logo.svg';
import '../App.css';
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import {ToastContainer} from "react-toastify";

import NavBar from "../components/NavBar";

import Home from '../pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Switch>
          {/* <Route path="/cart" component={Cart} /> */}
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    <ToastContainer/>
        
     
     {/* <Home></Home> */}
      {/* <header className="App-header">
       <h1 className='text-6xl text-red-500 bg-purple-200'>Amayuru indeewara</h1>
      </header> */}
    </div>
  );
}

export default App;
