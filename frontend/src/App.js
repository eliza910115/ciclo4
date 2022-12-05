import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

//importamos los comp creados
import ListarOrdenes from './components/listarOrdenes';
import Home from './components/home';
import NavBarExample from './layouts/navbar';
import Login from './components/login';
import CrearOrdenes from './components/crearOrdenes';


function App() {
  return (
    <div className="App">

<BrowserRouter>
  <Routes>
      <Route path='/' element={ <NavBarExample /> }>
      <Route path='ListarOrdenes' element={ <ListarOrdenes /> } />
      <Route path='CrearOrdenes' element={ <CrearOrdenes /> } />
      <Route path='Home' element={ <Home /> } />
      <Route path='Login' element={ <Login /> } />
      <Route path='*' element={ <Navigate replace to="/"/> }/>
    </Route>

  </Routes> 

</BrowserRouter>



    </div>
  );
}

export default App;
