import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Navigation from './components/shared/navigtation/Navigation';
import Register from './pages/register/Register';
import Login from './pages/login/Login';


function App() {
  return (
    <Router>
      <Navigation />

      <Routes>

        <Route path='/' exact element = {<Home />} /> 
        <Route path='/register' exact element = {<Register />} /> 
        <Route path='/login' exact element = {<Login />} />
      </Routes>

    </Router>
  );
}

export default App;
