import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.css';
import LoginForm from './containers/LoginForm';
import RegisterForm from './containers/RegisterForm'

function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path='/' element={<LoginForm/>}/>
  <Route path='/Register' element={<RegisterForm/>}/>
</Routes>
</BrowserRouter>
  );
}

export default App;
