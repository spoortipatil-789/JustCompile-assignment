import logo from './logo.svg';
import {Routes , Route} from 'react-router-dom'
import './App.css';
import { Login } from './Components/Login';
import { Header } from './Components/Header';
import { Home } from './Components/Home';
import { Welcome } from './Components/Welcomepage';
import { Signin } from './Components/Signin';

function App() {
  return (
    <div className="App">
      <Header/>
      
      <Routes>
        <Route path='/' element={<Welcome/>}></Route>
        <Route path='/register' element={<Signin/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
