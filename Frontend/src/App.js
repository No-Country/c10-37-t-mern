import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.css';
import LoginForm from './containers/LoginForm';
import RegisterForm from './containers/RegisterForm';
import Home from './containers/Home';

function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path='/' element={<LoginForm/>}/>
  <Route path='/register' element={<RegisterForm/>}/>
  <Route path='/home' element={<Home/>}/>
</Routes>
</BrowserRouter>
  );
}

export default App;
