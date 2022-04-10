import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register';
import About from './Pages/About';
import Blogs from './Pages/Blogs';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Page404 from './Pages/Page404';


function App() {

 
  return (
    <Container>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/login' element={ <Login></Login> }></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<Page404></Page404>}></Route>
      </Routes>
      
    </Container>
  );
}

export default App;
